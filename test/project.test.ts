import { synthSnapshot } from 'projen/lib/util/synth';
import { ProjenProjectFromGit } from '../src';

describe('given a ProjenProjectFromGit', () => {
  const project = new ProjenProjectFromGit({
    author: 'Test',
    authorAddress: 'test@example.com',
    defaultReleaseBranch: 'main',
    name: 'test-project',
    repositoryUrl: 'git@example.com:example/test.git',
  });

  const snapshot = synthSnapshot(project);

  test('.jsii files are not ignored', () => {
    expect(snapshot['.gitignore']).not.toContain('.jsii');
  });

  test('lib files are not ignored', () => {
    expect(snapshot['.gitignore']).not.toContain('lib/');
  });

  test('does not have any dependencies', () => {
    expect(snapshot['.gitignore']).not.toHaveProperty('dependencies');
  });

  test('has a dev dependency on ts3.9', () => {
    expect(snapshot['package.json']).toMatchObject(expect.objectContaining({
      devDependencies: expect.objectContaining({
        typescript: '^3.9.0',
      }),
    }));
  });

  test('has a dev dependency on projen', () => {
    expect(snapshot['package.json']).toMatchObject(expect.objectContaining({
      devDependencies: expect.objectContaining({
        projen: expect.any(String),
      }),
    }));
  });

  test('has a peer dependency on projen', () => {
    expect(snapshot['package.json']).toMatchObject(expect.objectContaining({
      peerDependencies: expect.objectContaining({
        projen: '^x.x.x',
      }),
    }));
  });
});

