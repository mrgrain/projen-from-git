import { cdk, DependencyType, javascript } from 'projen';

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

    this.addPeerDeps('projen@^0.90.0');

    this.gitignore.removePatterns('.jsii', '/lib');
  }
}
