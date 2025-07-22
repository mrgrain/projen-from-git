import { cdk, DependencyType, javascript, SampleDir } from 'projen';

export class ProjenProjectFromGit extends cdk.JsiiProject {
  public constructor(options: cdk.JsiiProjectOptions) {
    super({
      projenrcTs: true,
      packageManager: javascript.NodePackageManager.NPM,
      peerDependencyOptions: {
        pinnedDevDependency: false,
      },
      publishToGo: undefined,
      publishToMaven: undefined,
      publishToNuget: undefined,
      publishToPypi: undefined,
      releaseToNpm: false,
      ...options,
      depsUpgradeOptions: {
        types: [DependencyType.BUILD, DependencyType.OPTIONAL, DependencyType.RUNTIME],
      },
      deps: [
        ...options?.deps || [],
      ],
      devDeps: [
        ...options?.devDeps || [],
        'projen',
      ],
      peerDeps: [
        ...options?.peerDeps || [],
      ],
    });

    this.addPeerDeps('constructs@^10.0.0', 'projen@>=0.90.0');

    this.gitignore.removePatterns('.jsii', '/lib');

    // This project isn't packaged, so we do nothing
    this.tasks.tryFind('package')?.reset();

    // Custom samples
    this.removeDefaultSamples();
    this.sampleCode();
  }

  /**
   * Setup sample code for new projects
   *
   * Override this method to implement custom samples.
   */
  protected sampleCode() {
    new SampleDir(this, this.srcdir, {
      files: {
        'index.ts': [
          'import * as projen from \'projen\';',
          '',
          'export class MyProject extends projen.Project {',
          '  // add your code here',
          '}',
          '',
        ].join('\n'),
      },
    });

    if (this.jest) {
      new SampleDir(this, this.testdir, {
        files: {
          'project.test.ts': [
            "import { MyProject } from '../src';",
            '',
            "test('MyProject synthesizes without error', () => {",
            '  const project = new MyProject({',
            '    name: \'test-project\',',
            '  });',
            '  expect(() => project.synth()).not.toThrow();',
            '});',
            '',
          ].join('\n'),
        },
      });
    }
  }

  /**
   * Remove the default samples from the project
   */
  private removeDefaultSamples() {
    const samples = this.node.children.filter(component => component instanceof SampleDir);
    for (const sample of samples) {
      this.node.tryRemoveChild(sample.node.id);
    }
  }
}
