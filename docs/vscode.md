# VS code

## Config settting.json

### config `Terminal`

```json
  "terminal.integrated.shell.linux": "/usr/local/bin/fish",
  "terminal.integrated.fontFamily": "Fira Mono for Powerline, Monaco, 'Courier New', monospace",
  "terminal.external.osxExec": "iTerm.app",
  "terminal.integrated.fontWeightBold": "100",
  "terminal.explorerKind": "external",
  "terminal.external.linuxExec": "iTerm.app",
  "terminal.integrated.fontSize": 14,
  "terminal.integrated.fontWeight": "100",
```

### Config `react`

config `go to definition` in vscode for `reactx` by creating `jsconfig.json` in the root of project with the following content.

```js
// jsconfig.json

{
  "compilerOptions": {
    "baseUrl": ".",
    "js": "react"
  },
  "exclude": ["node_modules", "build"]
}
```

## Plugins for VScode

### Plugin: Activitus Bar

> use tiny activitus Bar(on the bottom) instead of large `sidebar` on the left.

### Plugin: Auto Import

> Automatically finds, parses and provides code actions and code completion. Works well with react, typscripts.

### Plugin: New Moon Syntax theme

> my primary color theme for vscode

### Plugin: Material Icon Theme

> my favorite icon package for vscode

### Plugin: npm intellisense

> plugin that autocompletes npm modules in import statements

### Plugin: Open recent files

> to open recent files `CMD + E`

### PLugin: prettier

> code formatter for all languages

### Plugin: setting Sync

> synchronize the vscode settings

### Plugin: Todo+

> a great todo extension to write todo in vscode

### Plugin: shell-format

> better programming with shell

### Plugin: TS config plugin

> `Webpack.config.js` code completition

### Plugin: ES7 React/Redux/GraphQL/React-Native snippets

code snippets for react, and more.

### Plugin: advanced-new-file

> create a new file anywhere you would like `opt + CMD + N`

### Plugin: auto rename tag

> auto rename tag in html or react

### Plugin: auto close tag

> auto close the HTML tag

### Plugin: htmltagwrap

> wrap any text within html context

### Plugin: IntelliSense for CSS class names in HTML

> code completition by loading all css files in the project

### Plugin: javascript console utils

> Insert and remove console.\* statement in the file:
> `CMD+shift+L` `CMD+shift+D`

### Plugin: Lorem ipsum

> insert single/mutilple line lorem ipsum text

### Plugin: vscode-styled-components

> great support for `react-styled-components`
