# ProjenProjectFromGit

A projen project that can be used directly from a git repository w/o publishing.

## Getting started

Create your custom projen from git project with this simple command:

```console
projen new --from @mrgrain/projen-from-git@mrgrain/projen-from-git
```

It is important to us the `<package-name>@<git-remote>` format, otherwise projen won't be able to correctly resolve the package.
All protocols supported by npm are supported for `<git-remote>`, however limitations apply if you change the package manager (see below).

## Configuration

All `JsiiProject` options are available and can be used as command line flag when running `projen new`.
For a full list of the available flags, run `projen new jsii --help`.

### projen dependency

By default, a `ProjenProjectFromGit` will take the latest version of projen as a dev dependency and any version as peer dependency.
In practice this works okay, since most projen projects auto-updated to the latest version of projen.

However you might want to consider changing the peer dependency version constraint to the actual minimal required version.

### Changed defaults

| Option                                      | New default |
| ------------------------------------------- | ----------- |
| `packageManager`                            | `"npm"`     |
| `peerDependencyOptions.pinnedDevDependency` | `false`     |
| `projenrcTs`                                | `true`      |
| `releaseToNpm`                              | `false`     |

## Limitations

### Support for JavaScript & TypeScript only

Using a git repository requires all compiled files to be checked into version control.
Currently it is not easily possible to check-in the jsii output files for any other languages.

### Supported `<git-remote>` formats

Please refer to the documentation of your package manager for supported formats.
When using `yarn` or `pnpm` the safest way is to use one of these two formats:

```console
git+ssh://github.com/mrgrain/projen-from-git.git
git+https://github.com/mrgrain/projen-from-git.git
```

### Authentication

Authentication is handled by package managers.
Please do not open an issue if authentication does not work.
The easiest way is to have a public repository and use an Open Source license.
