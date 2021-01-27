<div align="center">
  <span class="iconify" data-icon="file-icons:vscode" data-inline="false" width="100"></span>
</div>

<h3>table of content</h3>

[[toc]]

---

## My vscode settting.json

```json
{
  "window.zoomLevel": 0,
  "window.nativeTabs": true,
  "explorer.confirmDragAndDrop": false,
  "explorer.confirmDelete": false,
	// terminal
	"terminal.external.osxExec": "iTerm.app",
	"terminal.integrated.cursorStyle": "line",
	"terminal.integrated.shell.osx": "/usr/local/bin/fish",
	"terminal.integrated.fontFamily": "Fira Mono for Powerline, Monaco, 'Courier New', monospace",
	"terminal.integrated.fontSize": 14,
	"terminal.integrated.fontWeight": "100",
	// git
	"git.enableSmartCommit": true,
	"git.autofetch": true,
	// editor
	"editor.fontLigatures": true,
	"editor.fontSize": 15,
	"editor.fontWeight": "500",
	"editor.fontFamily": "Fira Code, Consolas, Courier New, monospace",
  "editor.minimap.enabled": false,
  "editor.tabSize": 2,
  "editor.wordWrapColumn": 120,
  "editor.minimap.maxColumn": 160,
	"editor.multiCursorModifier": "alt",
	"editor.tabCompletion": "on",
  "editor.formatOnType": true,
  "editor.lineNumbers": "off",
	// extension: todo
	"todo.timekeeping.finished.enabled": false,
	// extension: vscode sync
	"sync.gist": "c13b96c1db821afa17aa018af227ad68",
	// files association
	"files.associations": {
		"*.js": "javascriptreact",
		"*.html.twig": "twig",
		"*.svelte": "svelte",
		"*.svx": "markdown",
		".editorconfig": "editorconfig",
		"*.svtext": "svelte",
		"*.sass": "sass"
	},
	"emmet.includeLanguages": { "twig": "html" },
	"javascript.updateImportsOnFileMove.enabled": "always",
	"[javascript]": {
		"editor.defaultFormatter": "esbenp.prettier-vscode"
	},
	// extension: eslint
	"editor.codeActionsOnSave": {
		"source.fixAll.eslint": false
	},
	// extension: markdown editing
	"markdown.styles": ["markdown.css"],
	"[markdown]": {
		"editor.quickSuggestions": true
	},
	"terminal.integrated.fontWeightBold": "normal",
	"vetur.format.defaultFormatter.less": "none",
	"[scss]": {
		"editor.defaultFormatter": "esbenp.prettier-vscode"
	},
	"[typescriptreact]": {
		"editor.defaultFormatter": "esbenp.prettier-vscode"
	},
	"[javascriptreact]": {
		"editor.tabSize": 4,
		"editor.defaultFormatter": "esbenp.prettier-vscode"
	},
	"[json]": {
		"editor.defaultFormatter": "esbenp.prettier-vscode"
	},
  "prettier.useTabs": true,
  "workbench.colorTheme": "Darcula Theme from IntelliJ",
  "workbench.iconTheme": "material-icon-theme",
  "workbench.editor.highlightModifiedTabs": true,
	"workbench.activityBar.visible": false,
	"workbench.fontAliasing": "antialiased",
	"workbench.colorCustomizations": {
		"editor.background": "#302f2f",
		"statusBar.background": "#424242"
	},
	"javascript.format.insertSpaceAfterFunctionKeywordForAnonymousFunctions": false,
	"typescript.format.insertSpaceAfterFunctionKeywordForAnonymousFunctions": false,
	"editor.tokenColorCustomizations": {
		"textMateRules": [
			{
				"scope": "",
				"settings": {
					"foreground": "#ffffff",
					"fontStyle": "italic bold underline"
				}
			}
		]
	},
	"liveServer.settings.donotShowInfoMsg": true,
	// extension: php-cs-fixer
	"php-cs-fixer.executablePath": "~/.composer/vendor/bin/php-cs-fixer",
	"php-cs-fixer.executablePathWindows": "", //eg: php-cs-fixer.bat
	"php-cs-fixer.onsave": false,
	"php-cs-fixer.rules": "@PSR2",
	"php-cs-fixer.config": ".php_cs;.php_cs.dist",
	"php-cs-fixer.allowRisky": false,
	"php-cs-fixer.pathMode": "override",
	"php-cs-fixer.exclude": [],
	"php-cs-fixer.autoFixByBracket": true,
	"php-cs-fixer.autoFixBySemicolon": false,
	"php-cs-fixer.formatHtml": false,
	"php-cs-fixer.documentFormattingProvider": true,
	// extension: composer
	"composer.executablePath": "/usr/local/bin/composer",
	// extension: symfony code snippets
	"editor.quickSuggestions": {
		"other": true,
		"comments": true,
		"strings": true
	},
	"intelephense.format.enable": false,
	"[html]": {
		"editor.defaultFormatter": "esbenp.prettier-vscode"
	},
	"[typescript]": {
		"editor.defaultFormatter": "esbenp.prettier-vscode"
	},
	"html.format.enable": false,

	"[vue]": {
		"editor.defaultFormatter": "octref.vetur"
	},
  "sass.format.setPropertySpace": false,
	"scss.validate": false,
  "sass.andStared": [
    "active",
    "focus",
    "hover",
    "nth-child"
  ],
  // svelte support
  "[svelte]": {
    "editor.defaultFormatter": "svelte.svelte-vscode"
  },
  "svelte.plugin.svelte.compilerWarnings": {
		"unused-export-let": "error"
	},
  // mermaid diagram
  "mermaid-editor.preview.theme": "default",
	"mermaid-editor.generate.type": "svg",
	"extensions.ignoreRecommendations": false,
	"[yaml]": {
		"editor.defaultFormatter": "esbenp.prettier-vscode"
	}
}
```

## My favorite Plugins

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
