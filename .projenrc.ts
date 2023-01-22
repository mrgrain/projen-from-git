import { github, release } from 'projen';
import { ProjenProjectFromGit } from './src';

const project = new ProjenProjectFromGit({
  projenrcTs: true,
  author: 'Momo Kornher',
  authorAddress: 'mail@moritzkornher.de',
  name: '@mrgrain/projen-from-git',
  description: 'A projen project that can be used directly from a git repository w/o publishing.',
  repositoryUrl: 'git@github.com:mrgrain/projen-jsii-git-project.git',
  license: 'MIT',

  stale: false,

  githubOptions: {
    projenCredentials: github.GithubCredentials.fromApp(),
    pullRequestLintOptions: {
      semanticTitleOptions: {
        types: ['feat', 'fix', 'chore', 'docs', 'ci'],
      },
    },
  },
  autoApproveUpgrades: true,
  autoApproveOptions: {
    allowedUsernames: [
      'projen-builder[bot]', // Bot account for upgrade PRs
      'mrgrain', // Auto-approve PRs of main maintainer
    ],
  },

  defaultReleaseBranch: 'main',
  release: false,
  releaseTrigger: release.ReleaseTrigger.scheduled({
    schedule: '0 5 * * 1',
  }),
});

project.synth();