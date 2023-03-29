# API Reference <a name="API Reference" id="api-reference"></a>



## Classes <a name="Classes" id="Classes"></a>

### ProjenProjectFromGit <a name="ProjenProjectFromGit" id="@mrgrain/projen-from-git.ProjenProjectFromGit"></a>

#### Initializers <a name="Initializers" id="@mrgrain/projen-from-git.ProjenProjectFromGit.Initializer"></a>

```typescript
import { ProjenProjectFromGit } from '@mrgrain/projen-from-git'

new ProjenProjectFromGit(options: JsiiProjectOptions)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@mrgrain/projen-from-git.ProjenProjectFromGit.Initializer.parameter.options">options</a></code> | <code>projen.cdk.JsiiProjectOptions</code> | *No description.* |

---

##### `options`<sup>Required</sup> <a name="options" id="@mrgrain/projen-from-git.ProjenProjectFromGit.Initializer.parameter.options"></a>

- *Type:* projen.cdk.JsiiProjectOptions

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@mrgrain/projen-from-git.ProjenProjectFromGit.addExcludeFromCleanup">addExcludeFromCleanup</a></code> | Exclude the matching files from pre-synth cleanup. |
| <code><a href="#@mrgrain/projen-from-git.ProjenProjectFromGit.addGitIgnore">addGitIgnore</a></code> | Adds a .gitignore pattern. |
| <code><a href="#@mrgrain/projen-from-git.ProjenProjectFromGit.addPackageIgnore">addPackageIgnore</a></code> | Exclude these files from the bundled package. |
| <code><a href="#@mrgrain/projen-from-git.ProjenProjectFromGit.addTask">addTask</a></code> | Adds a new task to this project. |
| <code><a href="#@mrgrain/projen-from-git.ProjenProjectFromGit.addTip">addTip</a></code> | Prints a "tip" message during synthesis. |
| <code><a href="#@mrgrain/projen-from-git.ProjenProjectFromGit.annotateGenerated">annotateGenerated</a></code> | Marks the provided file(s) as being generated. |
| <code><a href="#@mrgrain/projen-from-git.ProjenProjectFromGit.postSynthesize">postSynthesize</a></code> | Called after all components are synthesized. |
| <code><a href="#@mrgrain/projen-from-git.ProjenProjectFromGit.preSynthesize">preSynthesize</a></code> | Called before all components are synthesized. |
| <code><a href="#@mrgrain/projen-from-git.ProjenProjectFromGit.removeTask">removeTask</a></code> | Removes a task from a project. |
| <code><a href="#@mrgrain/projen-from-git.ProjenProjectFromGit.runTaskCommand">runTaskCommand</a></code> | Returns the shell command to execute in order to run a task. |
| <code><a href="#@mrgrain/projen-from-git.ProjenProjectFromGit.synth">synth</a></code> | Synthesize all project files into `outdir`. |
| <code><a href="#@mrgrain/projen-from-git.ProjenProjectFromGit.tryFindFile">tryFindFile</a></code> | Finds a file at the specified relative path within this project and all its subprojects. |
| <code><a href="#@mrgrain/projen-from-git.ProjenProjectFromGit.tryFindJsonFile">tryFindJsonFile</a></code> | Finds a json file by name. |
| <code><a href="#@mrgrain/projen-from-git.ProjenProjectFromGit.tryFindObjectFile">tryFindObjectFile</a></code> | Finds an object file (like JsonFile, YamlFile, etc.) by name. |
| <code><a href="#@mrgrain/projen-from-git.ProjenProjectFromGit.tryRemoveFile">tryRemoveFile</a></code> | Finds a file at the specified relative path within this project and removes it. |
| <code><a href="#@mrgrain/projen-from-git.ProjenProjectFromGit.addBins">addBins</a></code> | *No description.* |
| <code><a href="#@mrgrain/projen-from-git.ProjenProjectFromGit.addBundledDeps">addBundledDeps</a></code> | Defines bundled dependencies. |
| <code><a href="#@mrgrain/projen-from-git.ProjenProjectFromGit.addCompileCommand">addCompileCommand</a></code> | DEPRECATED. |
| <code><a href="#@mrgrain/projen-from-git.ProjenProjectFromGit.addDeps">addDeps</a></code> | Defines normal dependencies. |
| <code><a href="#@mrgrain/projen-from-git.ProjenProjectFromGit.addDevDeps">addDevDeps</a></code> | Defines development/test dependencies. |
| <code><a href="#@mrgrain/projen-from-git.ProjenProjectFromGit.addFields">addFields</a></code> | Directly set fields in `package.json`. |
| <code><a href="#@mrgrain/projen-from-git.ProjenProjectFromGit.addKeywords">addKeywords</a></code> | Adds keywords to package.json (deduplicated). |
| <code><a href="#@mrgrain/projen-from-git.ProjenProjectFromGit.addPeerDeps">addPeerDeps</a></code> | Defines peer dependencies. |
| <code><a href="#@mrgrain/projen-from-git.ProjenProjectFromGit.addScripts">addScripts</a></code> | Replaces the contents of multiple npm package.json scripts. |
| <code><a href="#@mrgrain/projen-from-git.ProjenProjectFromGit.addTestCommand">addTestCommand</a></code> | DEPRECATED. |
| <code><a href="#@mrgrain/projen-from-git.ProjenProjectFromGit.hasScript">hasScript</a></code> | Indicates if a script by the name name is defined. |
| <code><a href="#@mrgrain/projen-from-git.ProjenProjectFromGit.removeScript">removeScript</a></code> | Removes the npm script (always successful). |
| <code><a href="#@mrgrain/projen-from-git.ProjenProjectFromGit.renderWorkflowSetup">renderWorkflowSetup</a></code> | Returns the set of workflow steps which should be executed to bootstrap a workflow. |
| <code><a href="#@mrgrain/projen-from-git.ProjenProjectFromGit.setScript">setScript</a></code> | Replaces the contents of an npm package.json script. |

---

##### `addExcludeFromCleanup` <a name="addExcludeFromCleanup" id="@mrgrain/projen-from-git.ProjenProjectFromGit.addExcludeFromCleanup"></a>

```typescript
public addExcludeFromCleanup(globs: string): void
```

Exclude the matching files from pre-synth cleanup.

Can be used when, for example, some
source files include the projen marker and we don't want them to be erased during synth.

###### `globs`<sup>Required</sup> <a name="globs" id="@mrgrain/projen-from-git.ProjenProjectFromGit.addExcludeFromCleanup.parameter.globs"></a>

- *Type:* string

The glob patterns to match.

---

##### `addGitIgnore` <a name="addGitIgnore" id="@mrgrain/projen-from-git.ProjenProjectFromGit.addGitIgnore"></a>

```typescript
public addGitIgnore(pattern: string): void
```

Adds a .gitignore pattern.

###### `pattern`<sup>Required</sup> <a name="pattern" id="@mrgrain/projen-from-git.ProjenProjectFromGit.addGitIgnore.parameter.pattern"></a>

- *Type:* string

The glob pattern to ignore.

---

##### `addPackageIgnore` <a name="addPackageIgnore" id="@mrgrain/projen-from-git.ProjenProjectFromGit.addPackageIgnore"></a>

```typescript
public addPackageIgnore(pattern: string): void
```

Exclude these files from the bundled package.

Implemented by project types based on the
packaging mechanism. For example, `NodeProject` delegates this to `.npmignore`.

###### `pattern`<sup>Required</sup> <a name="pattern" id="@mrgrain/projen-from-git.ProjenProjectFromGit.addPackageIgnore.parameter.pattern"></a>

- *Type:* string

---

##### `addTask` <a name="addTask" id="@mrgrain/projen-from-git.ProjenProjectFromGit.addTask"></a>

```typescript
public addTask(name: string, props?: TaskOptions): Task
```

Adds a new task to this project.

This will fail if the project already has
a task with this name.

###### `name`<sup>Required</sup> <a name="name" id="@mrgrain/projen-from-git.ProjenProjectFromGit.addTask.parameter.name"></a>

- *Type:* string

The task name to add.

---

###### `props`<sup>Optional</sup> <a name="props" id="@mrgrain/projen-from-git.ProjenProjectFromGit.addTask.parameter.props"></a>

- *Type:* projen.TaskOptions

Task properties.

---

##### ~~`addTip`~~ <a name="addTip" id="@mrgrain/projen-from-git.ProjenProjectFromGit.addTip"></a>

```typescript
public addTip(message: string): void
```

Prints a "tip" message during synthesis.

###### `message`<sup>Required</sup> <a name="message" id="@mrgrain/projen-from-git.ProjenProjectFromGit.addTip.parameter.message"></a>

- *Type:* string

The message.

---

##### `annotateGenerated` <a name="annotateGenerated" id="@mrgrain/projen-from-git.ProjenProjectFromGit.annotateGenerated"></a>

```typescript
public annotateGenerated(glob: string): void
```

Marks the provided file(s) as being generated.

This is achieved using the
github-linguist attributes. Generated files do not count against the
repository statistics and language breakdown.

> [https://github.com/github/linguist/blob/master/docs/overrides.md](https://github.com/github/linguist/blob/master/docs/overrides.md)

###### `glob`<sup>Required</sup> <a name="glob" id="@mrgrain/projen-from-git.ProjenProjectFromGit.annotateGenerated.parameter.glob"></a>

- *Type:* string

the glob pattern to match (could be a file path).

---

##### `postSynthesize` <a name="postSynthesize" id="@mrgrain/projen-from-git.ProjenProjectFromGit.postSynthesize"></a>

```typescript
public postSynthesize(): void
```

Called after all components are synthesized.

Order is *not* guaranteed.

##### `preSynthesize` <a name="preSynthesize" id="@mrgrain/projen-from-git.ProjenProjectFromGit.preSynthesize"></a>

```typescript
public preSynthesize(): void
```

Called before all components are synthesized.

##### `removeTask` <a name="removeTask" id="@mrgrain/projen-from-git.ProjenProjectFromGit.removeTask"></a>

```typescript
public removeTask(name: string): Task
```

Removes a task from a project.

###### `name`<sup>Required</sup> <a name="name" id="@mrgrain/projen-from-git.ProjenProjectFromGit.removeTask.parameter.name"></a>

- *Type:* string

The name of the task to remove.

---

##### `runTaskCommand` <a name="runTaskCommand" id="@mrgrain/projen-from-git.ProjenProjectFromGit.runTaskCommand"></a>

```typescript
public runTaskCommand(task: Task): string
```

Returns the shell command to execute in order to run a task.

This will
typically be `npx projen TASK`.

###### `task`<sup>Required</sup> <a name="task" id="@mrgrain/projen-from-git.ProjenProjectFromGit.runTaskCommand.parameter.task"></a>

- *Type:* projen.Task

The task for which the command is required.

---

##### `synth` <a name="synth" id="@mrgrain/projen-from-git.ProjenProjectFromGit.synth"></a>

```typescript
public synth(): void
```

Synthesize all project files into `outdir`.

1. Call "this.preSynthesize()"
2. Delete all generated files
3. Synthesize all sub-projects
4. Synthesize all components of this project
5. Call "postSynthesize()" for all components of this project
6. Call "this.postSynthesize()"

##### `tryFindFile` <a name="tryFindFile" id="@mrgrain/projen-from-git.ProjenProjectFromGit.tryFindFile"></a>

```typescript
public tryFindFile(filePath: string): FileBase
```

Finds a file at the specified relative path within this project and all its subprojects.

###### `filePath`<sup>Required</sup> <a name="filePath" id="@mrgrain/projen-from-git.ProjenProjectFromGit.tryFindFile.parameter.filePath"></a>

- *Type:* string

The file path.

If this path is relative, it will be resolved
from the root of _this_ project.

---

##### ~~`tryFindJsonFile`~~ <a name="tryFindJsonFile" id="@mrgrain/projen-from-git.ProjenProjectFromGit.tryFindJsonFile"></a>

```typescript
public tryFindJsonFile(filePath: string): JsonFile
```

Finds a json file by name.

###### `filePath`<sup>Required</sup> <a name="filePath" id="@mrgrain/projen-from-git.ProjenProjectFromGit.tryFindJsonFile.parameter.filePath"></a>

- *Type:* string

The file path.

---

##### `tryFindObjectFile` <a name="tryFindObjectFile" id="@mrgrain/projen-from-git.ProjenProjectFromGit.tryFindObjectFile"></a>

```typescript
public tryFindObjectFile(filePath: string): ObjectFile
```

Finds an object file (like JsonFile, YamlFile, etc.) by name.

###### `filePath`<sup>Required</sup> <a name="filePath" id="@mrgrain/projen-from-git.ProjenProjectFromGit.tryFindObjectFile.parameter.filePath"></a>

- *Type:* string

The file path.

---

##### `tryRemoveFile` <a name="tryRemoveFile" id="@mrgrain/projen-from-git.ProjenProjectFromGit.tryRemoveFile"></a>

```typescript
public tryRemoveFile(filePath: string): FileBase
```

Finds a file at the specified relative path within this project and removes it.

###### `filePath`<sup>Required</sup> <a name="filePath" id="@mrgrain/projen-from-git.ProjenProjectFromGit.tryRemoveFile.parameter.filePath"></a>

- *Type:* string

The file path.

If this path is relative, it will be
resolved from the root of _this_ project.

---

##### `addBins` <a name="addBins" id="@mrgrain/projen-from-git.ProjenProjectFromGit.addBins"></a>

```typescript
public addBins(bins: {[ key: string ]: string}): void
```

###### `bins`<sup>Required</sup> <a name="bins" id="@mrgrain/projen-from-git.ProjenProjectFromGit.addBins.parameter.bins"></a>

- *Type:* {[ key: string ]: string}

---

##### `addBundledDeps` <a name="addBundledDeps" id="@mrgrain/projen-from-git.ProjenProjectFromGit.addBundledDeps"></a>

```typescript
public addBundledDeps(deps: string): void
```

Defines bundled dependencies.

Bundled dependencies will be added as normal dependencies as well as to the
`bundledDependencies` section of your `package.json`.

###### `deps`<sup>Required</sup> <a name="deps" id="@mrgrain/projen-from-git.ProjenProjectFromGit.addBundledDeps.parameter.deps"></a>

- *Type:* string

Names modules to install.

By default, the the dependency will
be installed in the next `npx projen` run and the version will be recorded
in your `package.json` file. You can upgrade manually or using `yarn
add/upgrade`. If you wish to specify a version range use this syntax:
`module@^7`.

---

##### ~~`addCompileCommand`~~ <a name="addCompileCommand" id="@mrgrain/projen-from-git.ProjenProjectFromGit.addCompileCommand"></a>

```typescript
public addCompileCommand(commands: string): void
```

DEPRECATED.

###### `commands`<sup>Required</sup> <a name="commands" id="@mrgrain/projen-from-git.ProjenProjectFromGit.addCompileCommand.parameter.commands"></a>

- *Type:* string

---

##### `addDeps` <a name="addDeps" id="@mrgrain/projen-from-git.ProjenProjectFromGit.addDeps"></a>

```typescript
public addDeps(deps: string): void
```

Defines normal dependencies.

###### `deps`<sup>Required</sup> <a name="deps" id="@mrgrain/projen-from-git.ProjenProjectFromGit.addDeps.parameter.deps"></a>

- *Type:* string

Names modules to install.

By default, the the dependency will
be installed in the next `npx projen` run and the version will be recorded
in your `package.json` file. You can upgrade manually or using `yarn
add/upgrade`. If you wish to specify a version range use this syntax:
`module@^7`.

---

##### `addDevDeps` <a name="addDevDeps" id="@mrgrain/projen-from-git.ProjenProjectFromGit.addDevDeps"></a>

```typescript
public addDevDeps(deps: string): void
```

Defines development/test dependencies.

###### `deps`<sup>Required</sup> <a name="deps" id="@mrgrain/projen-from-git.ProjenProjectFromGit.addDevDeps.parameter.deps"></a>

- *Type:* string

Names modules to install.

By default, the the dependency will
be installed in the next `npx projen` run and the version will be recorded
in your `package.json` file. You can upgrade manually or using `yarn
add/upgrade`. If you wish to specify a version range use this syntax:
`module@^7`.

---

##### `addFields` <a name="addFields" id="@mrgrain/projen-from-git.ProjenProjectFromGit.addFields"></a>

```typescript
public addFields(fields: {[ key: string ]: any}): void
```

Directly set fields in `package.json`.

###### `fields`<sup>Required</sup> <a name="fields" id="@mrgrain/projen-from-git.ProjenProjectFromGit.addFields.parameter.fields"></a>

- *Type:* {[ key: string ]: any}

The fields to set.

---

##### `addKeywords` <a name="addKeywords" id="@mrgrain/projen-from-git.ProjenProjectFromGit.addKeywords"></a>

```typescript
public addKeywords(keywords: string): void
```

Adds keywords to package.json (deduplicated).

###### `keywords`<sup>Required</sup> <a name="keywords" id="@mrgrain/projen-from-git.ProjenProjectFromGit.addKeywords.parameter.keywords"></a>

- *Type:* string

The keywords to add.

---

##### `addPeerDeps` <a name="addPeerDeps" id="@mrgrain/projen-from-git.ProjenProjectFromGit.addPeerDeps"></a>

```typescript
public addPeerDeps(deps: string): void
```

Defines peer dependencies.

When adding peer dependencies, a devDependency will also be added on the
pinned version of the declared peer. This will ensure that you are testing
your code against the minimum version required from your consumers.

###### `deps`<sup>Required</sup> <a name="deps" id="@mrgrain/projen-from-git.ProjenProjectFromGit.addPeerDeps.parameter.deps"></a>

- *Type:* string

Names modules to install.

By default, the the dependency will
be installed in the next `npx projen` run and the version will be recorded
in your `package.json` file. You can upgrade manually or using `yarn
add/upgrade`. If you wish to specify a version range use this syntax:
`module@^7`.

---

##### `addScripts` <a name="addScripts" id="@mrgrain/projen-from-git.ProjenProjectFromGit.addScripts"></a>

```typescript
public addScripts(scripts: {[ key: string ]: string}): void
```

Replaces the contents of multiple npm package.json scripts.

###### `scripts`<sup>Required</sup> <a name="scripts" id="@mrgrain/projen-from-git.ProjenProjectFromGit.addScripts.parameter.scripts"></a>

- *Type:* {[ key: string ]: string}

The scripts to set.

---

##### ~~`addTestCommand`~~ <a name="addTestCommand" id="@mrgrain/projen-from-git.ProjenProjectFromGit.addTestCommand"></a>

```typescript
public addTestCommand(commands: string): void
```

DEPRECATED.

###### `commands`<sup>Required</sup> <a name="commands" id="@mrgrain/projen-from-git.ProjenProjectFromGit.addTestCommand.parameter.commands"></a>

- *Type:* string

---

##### `hasScript` <a name="hasScript" id="@mrgrain/projen-from-git.ProjenProjectFromGit.hasScript"></a>

```typescript
public hasScript(name: string): boolean
```

Indicates if a script by the name name is defined.

###### `name`<sup>Required</sup> <a name="name" id="@mrgrain/projen-from-git.ProjenProjectFromGit.hasScript.parameter.name"></a>

- *Type:* string

The name of the script.

---

##### `removeScript` <a name="removeScript" id="@mrgrain/projen-from-git.ProjenProjectFromGit.removeScript"></a>

```typescript
public removeScript(name: string): void
```

Removes the npm script (always successful).

###### `name`<sup>Required</sup> <a name="name" id="@mrgrain/projen-from-git.ProjenProjectFromGit.removeScript.parameter.name"></a>

- *Type:* string

The name of the script.

---

##### `renderWorkflowSetup` <a name="renderWorkflowSetup" id="@mrgrain/projen-from-git.ProjenProjectFromGit.renderWorkflowSetup"></a>

```typescript
public renderWorkflowSetup(options?: RenderWorkflowSetupOptions): JobStep[]
```

Returns the set of workflow steps which should be executed to bootstrap a workflow.

###### `options`<sup>Optional</sup> <a name="options" id="@mrgrain/projen-from-git.ProjenProjectFromGit.renderWorkflowSetup.parameter.options"></a>

- *Type:* projen.javascript.RenderWorkflowSetupOptions

Options.

---

##### `setScript` <a name="setScript" id="@mrgrain/projen-from-git.ProjenProjectFromGit.setScript"></a>

```typescript
public setScript(name: string, command: string): void
```

Replaces the contents of an npm package.json script.

###### `name`<sup>Required</sup> <a name="name" id="@mrgrain/projen-from-git.ProjenProjectFromGit.setScript.parameter.name"></a>

- *Type:* string

The script name.

---

###### `command`<sup>Required</sup> <a name="command" id="@mrgrain/projen-from-git.ProjenProjectFromGit.setScript.parameter.command"></a>

- *Type:* string

The command to execute.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@mrgrain/projen-from-git.ProjenProjectFromGit.property.buildTask">buildTask</a></code> | <code>projen.Task</code> | *No description.* |
| <code><a href="#@mrgrain/projen-from-git.ProjenProjectFromGit.property.commitGenerated">commitGenerated</a></code> | <code>boolean</code> | Whether to commit the managed files by default. |
| <code><a href="#@mrgrain/projen-from-git.ProjenProjectFromGit.property.compileTask">compileTask</a></code> | <code>projen.Task</code> | *No description.* |
| <code><a href="#@mrgrain/projen-from-git.ProjenProjectFromGit.property.components">components</a></code> | <code>projen.Component[]</code> | Returns all the components within this project. |
| <code><a href="#@mrgrain/projen-from-git.ProjenProjectFromGit.property.deps">deps</a></code> | <code>projen.Dependencies</code> | Project dependencies. |
| <code><a href="#@mrgrain/projen-from-git.ProjenProjectFromGit.property.ejected">ejected</a></code> | <code>boolean</code> | Whether or not the project is being ejected. |
| <code><a href="#@mrgrain/projen-from-git.ProjenProjectFromGit.property.files">files</a></code> | <code>projen.FileBase[]</code> | All files in this project. |
| <code><a href="#@mrgrain/projen-from-git.ProjenProjectFromGit.property.gitattributes">gitattributes</a></code> | <code>projen.GitAttributesFile</code> | The .gitattributes file for this repository. |
| <code><a href="#@mrgrain/projen-from-git.ProjenProjectFromGit.property.gitignore">gitignore</a></code> | <code>projen.IgnoreFile</code> | .gitignore. |
| <code><a href="#@mrgrain/projen-from-git.ProjenProjectFromGit.property.logger">logger</a></code> | <code>projen.Logger</code> | Logging utilities. |
| <code><a href="#@mrgrain/projen-from-git.ProjenProjectFromGit.property.name">name</a></code> | <code>string</code> | Project name. |
| <code><a href="#@mrgrain/projen-from-git.ProjenProjectFromGit.property.outdir">outdir</a></code> | <code>string</code> | Absolute output directory of this project. |
| <code><a href="#@mrgrain/projen-from-git.ProjenProjectFromGit.property.packageTask">packageTask</a></code> | <code>projen.Task</code> | *No description.* |
| <code><a href="#@mrgrain/projen-from-git.ProjenProjectFromGit.property.postCompileTask">postCompileTask</a></code> | <code>projen.Task</code> | *No description.* |
| <code><a href="#@mrgrain/projen-from-git.ProjenProjectFromGit.property.preCompileTask">preCompileTask</a></code> | <code>projen.Task</code> | *No description.* |
| <code><a href="#@mrgrain/projen-from-git.ProjenProjectFromGit.property.projectBuild">projectBuild</a></code> | <code>projen.ProjectBuild</code> | Manages the build process of the project. |
| <code><a href="#@mrgrain/projen-from-git.ProjenProjectFromGit.property.projenCommand">projenCommand</a></code> | <code>string</code> | The command to use in order to run the projen CLI. |
| <code><a href="#@mrgrain/projen-from-git.ProjenProjectFromGit.property.root">root</a></code> | <code>projen.Project</code> | The root project. |
| <code><a href="#@mrgrain/projen-from-git.ProjenProjectFromGit.property.tasks">tasks</a></code> | <code>projen.Tasks</code> | Project tasks. |
| <code><a href="#@mrgrain/projen-from-git.ProjenProjectFromGit.property.testTask">testTask</a></code> | <code>projen.Task</code> | *No description.* |
| <code><a href="#@mrgrain/projen-from-git.ProjenProjectFromGit.property.defaultTask">defaultTask</a></code> | <code>projen.Task</code> | This is the "default" task, the one that executes "projen". |
| <code><a href="#@mrgrain/projen-from-git.ProjenProjectFromGit.property.initProject">initProject</a></code> | <code>projen.InitProject</code> | The options used when this project is bootstrapped via `projen new`. |
| <code><a href="#@mrgrain/projen-from-git.ProjenProjectFromGit.property.parent">parent</a></code> | <code>projen.Project</code> | A parent project. |
| <code><a href="#@mrgrain/projen-from-git.ProjenProjectFromGit.property.projectType">projectType</a></code> | <code>projen.ProjectType</code> | *No description.* |
| <code><a href="#@mrgrain/projen-from-git.ProjenProjectFromGit.property.autoApprove">autoApprove</a></code> | <code>projen.github.AutoApprove</code> | Auto approve set up for this project. |
| <code><a href="#@mrgrain/projen-from-git.ProjenProjectFromGit.property.devContainer">devContainer</a></code> | <code>projen.vscode.DevContainer</code> | Access for .devcontainer.json (used for GitHub Codespaces). |
| <code><a href="#@mrgrain/projen-from-git.ProjenProjectFromGit.property.github">github</a></code> | <code>projen.github.GitHub</code> | Access all github components. |
| <code><a href="#@mrgrain/projen-from-git.ProjenProjectFromGit.property.gitpod">gitpod</a></code> | <code>projen.Gitpod</code> | Access for Gitpod. |
| <code><a href="#@mrgrain/projen-from-git.ProjenProjectFromGit.property.vscode">vscode</a></code> | <code>projen.vscode.VsCode</code> | Access all VSCode components. |
| <code><a href="#@mrgrain/projen-from-git.ProjenProjectFromGit.property.allowLibraryDependencies">allowLibraryDependencies</a></code> | <code>boolean</code> | *No description.* |
| <code><a href="#@mrgrain/projen-from-git.ProjenProjectFromGit.property.artifactsDirectory">artifactsDirectory</a></code> | <code>string</code> | The build output directory. |
| <code><a href="#@mrgrain/projen-from-git.ProjenProjectFromGit.property.artifactsJavascriptDirectory">artifactsJavascriptDirectory</a></code> | <code>string</code> | The location of the npm tarball after build (`${artifactsDirectory}/js`). |
| <code><a href="#@mrgrain/projen-from-git.ProjenProjectFromGit.property.bundler">bundler</a></code> | <code>projen.javascript.Bundler</code> | *No description.* |
| <code><a href="#@mrgrain/projen-from-git.ProjenProjectFromGit.property.entrypoint">entrypoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@mrgrain/projen-from-git.ProjenProjectFromGit.property.manifest">manifest</a></code> | <code>any</code> | *No description.* |
| <code><a href="#@mrgrain/projen-from-git.ProjenProjectFromGit.property.package">package</a></code> | <code>projen.javascript.NodePackage</code> | API for managing the node package. |
| <code><a href="#@mrgrain/projen-from-git.ProjenProjectFromGit.property.packageManager">packageManager</a></code> | <code>projen.javascript.NodePackageManager</code> | The package manager to use. |
| <code><a href="#@mrgrain/projen-from-git.ProjenProjectFromGit.property.runScriptCommand">runScriptCommand</a></code> | <code>string</code> | The command to use to run scripts (e.g. `yarn run` or `npm run` depends on the package manager). |
| <code><a href="#@mrgrain/projen-from-git.ProjenProjectFromGit.property.autoMerge">autoMerge</a></code> | <code>projen.github.AutoMerge</code> | Component that sets up mergify for merging approved pull requests. |
| <code><a href="#@mrgrain/projen-from-git.ProjenProjectFromGit.property.buildWorkflow">buildWorkflow</a></code> | <code>projen.build.BuildWorkflow</code> | The PR build GitHub workflow. |
| <code><a href="#@mrgrain/projen-from-git.ProjenProjectFromGit.property.buildWorkflowJobId">buildWorkflowJobId</a></code> | <code>string</code> | The job ID of the build workflow. |
| <code><a href="#@mrgrain/projen-from-git.ProjenProjectFromGit.property.jest">jest</a></code> | <code>projen.javascript.Jest</code> | The Jest configuration (if enabled). |
| <code><a href="#@mrgrain/projen-from-git.ProjenProjectFromGit.property.maxNodeVersion">maxNodeVersion</a></code> | <code>string</code> | Maximum node version required by this package. |
| <code><a href="#@mrgrain/projen-from-git.ProjenProjectFromGit.property.minNodeVersion">minNodeVersion</a></code> | <code>string</code> | Minimum node.js version required by this package. |
| <code><a href="#@mrgrain/projen-from-git.ProjenProjectFromGit.property.npmignore">npmignore</a></code> | <code>projen.IgnoreFile</code> | The .npmignore file. |
| <code><a href="#@mrgrain/projen-from-git.ProjenProjectFromGit.property.prettier">prettier</a></code> | <code>projen.javascript.Prettier</code> | *No description.* |
| <code><a href="#@mrgrain/projen-from-git.ProjenProjectFromGit.property.publisher">publisher</a></code> | <code>projen.release.Publisher</code> | Package publisher. |
| <code><a href="#@mrgrain/projen-from-git.ProjenProjectFromGit.property.release">release</a></code> | <code>projen.release.Release</code> | Release management. |
| <code><a href="#@mrgrain/projen-from-git.ProjenProjectFromGit.property.upgradeWorkflow">upgradeWorkflow</a></code> | <code>projen.javascript.UpgradeDependencies</code> | The upgrade workflow. |
| <code><a href="#@mrgrain/projen-from-git.ProjenProjectFromGit.property.docsDirectory">docsDirectory</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@mrgrain/projen-from-git.ProjenProjectFromGit.property.libdir">libdir</a></code> | <code>string</code> | The directory in which compiled .js files reside. |
| <code><a href="#@mrgrain/projen-from-git.ProjenProjectFromGit.property.srcdir">srcdir</a></code> | <code>string</code> | The directory in which the .ts sources reside. |
| <code><a href="#@mrgrain/projen-from-git.ProjenProjectFromGit.property.testdir">testdir</a></code> | <code>string</code> | The directory in which tests reside. |
| <code><a href="#@mrgrain/projen-from-git.ProjenProjectFromGit.property.tsconfigDev">tsconfigDev</a></code> | <code>projen.javascript.TypescriptConfig</code> | A typescript configuration file which covers all files (sources, tests, projen). |
| <code><a href="#@mrgrain/projen-from-git.ProjenProjectFromGit.property.watchTask">watchTask</a></code> | <code>projen.Task</code> | The "watch" task. |
| <code><a href="#@mrgrain/projen-from-git.ProjenProjectFromGit.property.docgen">docgen</a></code> | <code>boolean</code> | *No description.* |
| <code><a href="#@mrgrain/projen-from-git.ProjenProjectFromGit.property.eslint">eslint</a></code> | <code>projen.javascript.Eslint</code> | *No description.* |
| <code><a href="#@mrgrain/projen-from-git.ProjenProjectFromGit.property.tsconfig">tsconfig</a></code> | <code>projen.javascript.TypescriptConfig</code> | *No description.* |
| <code><a href="#@mrgrain/projen-from-git.ProjenProjectFromGit.property.tsconfigEslint">tsconfigEslint</a></code> | <code>projen.javascript.TypescriptConfig</code> | *No description.* |

---

##### `buildTask`<sup>Required</sup> <a name="buildTask" id="@mrgrain/projen-from-git.ProjenProjectFromGit.property.buildTask"></a>

```typescript
public readonly buildTask: Task;
```

- *Type:* projen.Task

---

##### `commitGenerated`<sup>Required</sup> <a name="commitGenerated" id="@mrgrain/projen-from-git.ProjenProjectFromGit.property.commitGenerated"></a>

```typescript
public readonly commitGenerated: boolean;
```

- *Type:* boolean

Whether to commit the managed files by default.

---

##### `compileTask`<sup>Required</sup> <a name="compileTask" id="@mrgrain/projen-from-git.ProjenProjectFromGit.property.compileTask"></a>

```typescript
public readonly compileTask: Task;
```

- *Type:* projen.Task

---

##### `components`<sup>Required</sup> <a name="components" id="@mrgrain/projen-from-git.ProjenProjectFromGit.property.components"></a>

```typescript
public readonly components: Component[];
```

- *Type:* projen.Component[]

Returns all the components within this project.

---

##### `deps`<sup>Required</sup> <a name="deps" id="@mrgrain/projen-from-git.ProjenProjectFromGit.property.deps"></a>

```typescript
public readonly deps: Dependencies;
```

- *Type:* projen.Dependencies

Project dependencies.

---

##### `ejected`<sup>Required</sup> <a name="ejected" id="@mrgrain/projen-from-git.ProjenProjectFromGit.property.ejected"></a>

```typescript
public readonly ejected: boolean;
```

- *Type:* boolean

Whether or not the project is being ejected.

---

##### `files`<sup>Required</sup> <a name="files" id="@mrgrain/projen-from-git.ProjenProjectFromGit.property.files"></a>

```typescript
public readonly files: FileBase[];
```

- *Type:* projen.FileBase[]

All files in this project.

---

##### `gitattributes`<sup>Required</sup> <a name="gitattributes" id="@mrgrain/projen-from-git.ProjenProjectFromGit.property.gitattributes"></a>

```typescript
public readonly gitattributes: GitAttributesFile;
```

- *Type:* projen.GitAttributesFile

The .gitattributes file for this repository.

---

##### `gitignore`<sup>Required</sup> <a name="gitignore" id="@mrgrain/projen-from-git.ProjenProjectFromGit.property.gitignore"></a>

```typescript
public readonly gitignore: IgnoreFile;
```

- *Type:* projen.IgnoreFile

.gitignore.

---

##### `logger`<sup>Required</sup> <a name="logger" id="@mrgrain/projen-from-git.ProjenProjectFromGit.property.logger"></a>

```typescript
public readonly logger: Logger;
```

- *Type:* projen.Logger

Logging utilities.

---

##### `name`<sup>Required</sup> <a name="name" id="@mrgrain/projen-from-git.ProjenProjectFromGit.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Project name.

---

##### `outdir`<sup>Required</sup> <a name="outdir" id="@mrgrain/projen-from-git.ProjenProjectFromGit.property.outdir"></a>

```typescript
public readonly outdir: string;
```

- *Type:* string

Absolute output directory of this project.

---

##### `packageTask`<sup>Required</sup> <a name="packageTask" id="@mrgrain/projen-from-git.ProjenProjectFromGit.property.packageTask"></a>

```typescript
public readonly packageTask: Task;
```

- *Type:* projen.Task

---

##### `postCompileTask`<sup>Required</sup> <a name="postCompileTask" id="@mrgrain/projen-from-git.ProjenProjectFromGit.property.postCompileTask"></a>

```typescript
public readonly postCompileTask: Task;
```

- *Type:* projen.Task

---

##### `preCompileTask`<sup>Required</sup> <a name="preCompileTask" id="@mrgrain/projen-from-git.ProjenProjectFromGit.property.preCompileTask"></a>

```typescript
public readonly preCompileTask: Task;
```

- *Type:* projen.Task

---

##### `projectBuild`<sup>Required</sup> <a name="projectBuild" id="@mrgrain/projen-from-git.ProjenProjectFromGit.property.projectBuild"></a>

```typescript
public readonly projectBuild: ProjectBuild;
```

- *Type:* projen.ProjectBuild

Manages the build process of the project.

---

##### `projenCommand`<sup>Required</sup> <a name="projenCommand" id="@mrgrain/projen-from-git.ProjenProjectFromGit.property.projenCommand"></a>

```typescript
public readonly projenCommand: string;
```

- *Type:* string

The command to use in order to run the projen CLI.

---

##### `root`<sup>Required</sup> <a name="root" id="@mrgrain/projen-from-git.ProjenProjectFromGit.property.root"></a>

```typescript
public readonly root: Project;
```

- *Type:* projen.Project

The root project.

---

##### `tasks`<sup>Required</sup> <a name="tasks" id="@mrgrain/projen-from-git.ProjenProjectFromGit.property.tasks"></a>

```typescript
public readonly tasks: Tasks;
```

- *Type:* projen.Tasks

Project tasks.

---

##### `testTask`<sup>Required</sup> <a name="testTask" id="@mrgrain/projen-from-git.ProjenProjectFromGit.property.testTask"></a>

```typescript
public readonly testTask: Task;
```

- *Type:* projen.Task

---

##### `defaultTask`<sup>Optional</sup> <a name="defaultTask" id="@mrgrain/projen-from-git.ProjenProjectFromGit.property.defaultTask"></a>

```typescript
public readonly defaultTask: Task;
```

- *Type:* projen.Task

This is the "default" task, the one that executes "projen".

Undefined if
the project is being ejected.

---

##### `initProject`<sup>Optional</sup> <a name="initProject" id="@mrgrain/projen-from-git.ProjenProjectFromGit.property.initProject"></a>

```typescript
public readonly initProject: InitProject;
```

- *Type:* projen.InitProject

The options used when this project is bootstrapped via `projen new`.

It
includes the original set of options passed to the CLI and also the JSII
FQN of the project type.

---

##### `parent`<sup>Optional</sup> <a name="parent" id="@mrgrain/projen-from-git.ProjenProjectFromGit.property.parent"></a>

```typescript
public readonly parent: Project;
```

- *Type:* projen.Project

A parent project.

If undefined, this is the root project.

---

##### `projectType`<sup>Required</sup> <a name="projectType" id="@mrgrain/projen-from-git.ProjenProjectFromGit.property.projectType"></a>

```typescript
public readonly projectType: ProjectType;
```

- *Type:* projen.ProjectType

---

##### `autoApprove`<sup>Optional</sup> <a name="autoApprove" id="@mrgrain/projen-from-git.ProjenProjectFromGit.property.autoApprove"></a>

```typescript
public readonly autoApprove: AutoApprove;
```

- *Type:* projen.github.AutoApprove

Auto approve set up for this project.

---

##### `devContainer`<sup>Optional</sup> <a name="devContainer" id="@mrgrain/projen-from-git.ProjenProjectFromGit.property.devContainer"></a>

```typescript
public readonly devContainer: DevContainer;
```

- *Type:* projen.vscode.DevContainer

Access for .devcontainer.json (used for GitHub Codespaces).

This will be `undefined` if devContainer boolean is false

---

##### `github`<sup>Optional</sup> <a name="github" id="@mrgrain/projen-from-git.ProjenProjectFromGit.property.github"></a>

```typescript
public readonly github: GitHub;
```

- *Type:* projen.github.GitHub

Access all github components.

This will be `undefined` for subprojects.

---

##### `gitpod`<sup>Optional</sup> <a name="gitpod" id="@mrgrain/projen-from-git.ProjenProjectFromGit.property.gitpod"></a>

```typescript
public readonly gitpod: Gitpod;
```

- *Type:* projen.Gitpod

Access for Gitpod.

This will be `undefined` if gitpod boolean is false

---

##### `vscode`<sup>Optional</sup> <a name="vscode" id="@mrgrain/projen-from-git.ProjenProjectFromGit.property.vscode"></a>

```typescript
public readonly vscode: VsCode;
```

- *Type:* projen.vscode.VsCode

Access all VSCode components.

This will be `undefined` for subprojects.

---

##### ~~`allowLibraryDependencies`~~<sup>Required</sup> <a name="allowLibraryDependencies" id="@mrgrain/projen-from-git.ProjenProjectFromGit.property.allowLibraryDependencies"></a>

- *Deprecated:* use `package.allowLibraryDependencies`

```typescript
public readonly allowLibraryDependencies: boolean;
```

- *Type:* boolean

---

##### `artifactsDirectory`<sup>Required</sup> <a name="artifactsDirectory" id="@mrgrain/projen-from-git.ProjenProjectFromGit.property.artifactsDirectory"></a>

```typescript
public readonly artifactsDirectory: string;
```

- *Type:* string

The build output directory.

An npm tarball will be created under the `js`
subdirectory. For example, if this is set to `dist` (the default), the npm
tarball will be placed under `dist/js/boom-boom-1.2.3.tg`.

---

##### `artifactsJavascriptDirectory`<sup>Required</sup> <a name="artifactsJavascriptDirectory" id="@mrgrain/projen-from-git.ProjenProjectFromGit.property.artifactsJavascriptDirectory"></a>

```typescript
public readonly artifactsJavascriptDirectory: string;
```

- *Type:* string

The location of the npm tarball after build (`${artifactsDirectory}/js`).

---

##### `bundler`<sup>Required</sup> <a name="bundler" id="@mrgrain/projen-from-git.ProjenProjectFromGit.property.bundler"></a>

```typescript
public readonly bundler: Bundler;
```

- *Type:* projen.javascript.Bundler

---

##### ~~`entrypoint`~~<sup>Required</sup> <a name="entrypoint" id="@mrgrain/projen-from-git.ProjenProjectFromGit.property.entrypoint"></a>

- *Deprecated:* use `package.entrypoint`

```typescript
public readonly entrypoint: string;
```

- *Type:* string

---

##### ~~`manifest`~~<sup>Required</sup> <a name="manifest" id="@mrgrain/projen-from-git.ProjenProjectFromGit.property.manifest"></a>

- *Deprecated:* use `package.addField(x, y)`

```typescript
public readonly manifest: any;
```

- *Type:* any

---

##### `package`<sup>Required</sup> <a name="package" id="@mrgrain/projen-from-git.ProjenProjectFromGit.property.package"></a>

```typescript
public readonly package: NodePackage;
```

- *Type:* projen.javascript.NodePackage

API for managing the node package.

---

##### ~~`packageManager`~~<sup>Required</sup> <a name="packageManager" id="@mrgrain/projen-from-git.ProjenProjectFromGit.property.packageManager"></a>

- *Deprecated:* use `package.packageManager`

```typescript
public readonly packageManager: NodePackageManager;
```

- *Type:* projen.javascript.NodePackageManager

The package manager to use.

---

##### `runScriptCommand`<sup>Required</sup> <a name="runScriptCommand" id="@mrgrain/projen-from-git.ProjenProjectFromGit.property.runScriptCommand"></a>

```typescript
public readonly runScriptCommand: string;
```

- *Type:* string

The command to use to run scripts (e.g. `yarn run` or `npm run` depends on the package manager).

---

##### `autoMerge`<sup>Optional</sup> <a name="autoMerge" id="@mrgrain/projen-from-git.ProjenProjectFromGit.property.autoMerge"></a>

```typescript
public readonly autoMerge: AutoMerge;
```

- *Type:* projen.github.AutoMerge

Component that sets up mergify for merging approved pull requests.

---

##### `buildWorkflow`<sup>Optional</sup> <a name="buildWorkflow" id="@mrgrain/projen-from-git.ProjenProjectFromGit.property.buildWorkflow"></a>

```typescript
public readonly buildWorkflow: BuildWorkflow;
```

- *Type:* projen.build.BuildWorkflow

The PR build GitHub workflow.

`undefined` if `buildWorkflow` is disabled.

---

##### `buildWorkflowJobId`<sup>Optional</sup> <a name="buildWorkflowJobId" id="@mrgrain/projen-from-git.ProjenProjectFromGit.property.buildWorkflowJobId"></a>

```typescript
public readonly buildWorkflowJobId: string;
```

- *Type:* string

The job ID of the build workflow.

---

##### `jest`<sup>Optional</sup> <a name="jest" id="@mrgrain/projen-from-git.ProjenProjectFromGit.property.jest"></a>

```typescript
public readonly jest: Jest;
```

- *Type:* projen.javascript.Jest

The Jest configuration (if enabled).

---

##### `maxNodeVersion`<sup>Optional</sup> <a name="maxNodeVersion" id="@mrgrain/projen-from-git.ProjenProjectFromGit.property.maxNodeVersion"></a>

```typescript
public readonly maxNodeVersion: string;
```

- *Type:* string

Maximum node version required by this package.

---

##### `minNodeVersion`<sup>Optional</sup> <a name="minNodeVersion" id="@mrgrain/projen-from-git.ProjenProjectFromGit.property.minNodeVersion"></a>

```typescript
public readonly minNodeVersion: string;
```

- *Type:* string

Minimum node.js version required by this package.

---

##### `npmignore`<sup>Optional</sup> <a name="npmignore" id="@mrgrain/projen-from-git.ProjenProjectFromGit.property.npmignore"></a>

```typescript
public readonly npmignore: IgnoreFile;
```

- *Type:* projen.IgnoreFile

The .npmignore file.

---

##### `prettier`<sup>Optional</sup> <a name="prettier" id="@mrgrain/projen-from-git.ProjenProjectFromGit.property.prettier"></a>

```typescript
public readonly prettier: Prettier;
```

- *Type:* projen.javascript.Prettier

---

##### ~~`publisher`~~<sup>Optional</sup> <a name="publisher" id="@mrgrain/projen-from-git.ProjenProjectFromGit.property.publisher"></a>

- *Deprecated:* use `release.publisher`.

```typescript
public readonly publisher: Publisher;
```

- *Type:* projen.release.Publisher

Package publisher.

This will be `undefined` if the project does not have a
release workflow.

---

##### `release`<sup>Optional</sup> <a name="release" id="@mrgrain/projen-from-git.ProjenProjectFromGit.property.release"></a>

```typescript
public readonly release: Release;
```

- *Type:* projen.release.Release

Release management.

---

##### `upgradeWorkflow`<sup>Optional</sup> <a name="upgradeWorkflow" id="@mrgrain/projen-from-git.ProjenProjectFromGit.property.upgradeWorkflow"></a>

```typescript
public readonly upgradeWorkflow: UpgradeDependencies;
```

- *Type:* projen.javascript.UpgradeDependencies

The upgrade workflow.

---

##### `docsDirectory`<sup>Required</sup> <a name="docsDirectory" id="@mrgrain/projen-from-git.ProjenProjectFromGit.property.docsDirectory"></a>

```typescript
public readonly docsDirectory: string;
```

- *Type:* string

---

##### `libdir`<sup>Required</sup> <a name="libdir" id="@mrgrain/projen-from-git.ProjenProjectFromGit.property.libdir"></a>

```typescript
public readonly libdir: string;
```

- *Type:* string

The directory in which compiled .js files reside.

---

##### `srcdir`<sup>Required</sup> <a name="srcdir" id="@mrgrain/projen-from-git.ProjenProjectFromGit.property.srcdir"></a>

```typescript
public readonly srcdir: string;
```

- *Type:* string

The directory in which the .ts sources reside.

---

##### `testdir`<sup>Required</sup> <a name="testdir" id="@mrgrain/projen-from-git.ProjenProjectFromGit.property.testdir"></a>

```typescript
public readonly testdir: string;
```

- *Type:* string

The directory in which tests reside.

---

##### `tsconfigDev`<sup>Required</sup> <a name="tsconfigDev" id="@mrgrain/projen-from-git.ProjenProjectFromGit.property.tsconfigDev"></a>

```typescript
public readonly tsconfigDev: TypescriptConfig;
```

- *Type:* projen.javascript.TypescriptConfig

A typescript configuration file which covers all files (sources, tests, projen).

---

##### `watchTask`<sup>Required</sup> <a name="watchTask" id="@mrgrain/projen-from-git.ProjenProjectFromGit.property.watchTask"></a>

```typescript
public readonly watchTask: Task;
```

- *Type:* projen.Task

The "watch" task.

---

##### `docgen`<sup>Optional</sup> <a name="docgen" id="@mrgrain/projen-from-git.ProjenProjectFromGit.property.docgen"></a>

```typescript
public readonly docgen: boolean;
```

- *Type:* boolean

---

##### `eslint`<sup>Optional</sup> <a name="eslint" id="@mrgrain/projen-from-git.ProjenProjectFromGit.property.eslint"></a>

```typescript
public readonly eslint: Eslint;
```

- *Type:* projen.javascript.Eslint

---

##### `tsconfig`<sup>Optional</sup> <a name="tsconfig" id="@mrgrain/projen-from-git.ProjenProjectFromGit.property.tsconfig"></a>

```typescript
public readonly tsconfig: TypescriptConfig;
```

- *Type:* projen.javascript.TypescriptConfig

---

##### `tsconfigEslint`<sup>Optional</sup> <a name="tsconfigEslint" id="@mrgrain/projen-from-git.ProjenProjectFromGit.property.tsconfigEslint"></a>

```typescript
public readonly tsconfigEslint: TypescriptConfig;
```

- *Type:* projen.javascript.TypescriptConfig

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@mrgrain/projen-from-git.ProjenProjectFromGit.property.DEFAULT_TASK">DEFAULT_TASK</a></code> | <code>string</code> | The name of the default task (the task executed when `projen` is run without arguments). |

---

##### `DEFAULT_TASK`<sup>Required</sup> <a name="DEFAULT_TASK" id="@mrgrain/projen-from-git.ProjenProjectFromGit.property.DEFAULT_TASK"></a>

```typescript
public readonly DEFAULT_TASK: string;
```

- *Type:* string

The name of the default task (the task executed when `projen` is run without arguments).

Normally
this task should synthesize the project files.

---


