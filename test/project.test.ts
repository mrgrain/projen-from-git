import { synthSnapshot } from 'projen/lib/util/synth';
import { ProjenProjectFromGit } from '../src';

test('.jsii files are not ignored', () => {
  const project = new ProjenProjectFromGit({
    author: 'Test',
    authorAddress: 'test@example.com',
    defaultReleaseBranch: 'main',
    name: 'test-project',
    repositoryUrl: 'git@example.com:example/test.git',
  });

  const snapshot = synthSnapshot(project);

  expect(snapshot['.gitignore']).not.toContain('.jsii');
});