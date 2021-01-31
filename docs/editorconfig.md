<div align="center">
  <span class="iconify" data-icon="vscode-icons:file-type-editorconfig" data-inline="false" width="100"></span>
</div>

<h3>table of content</h3>

[[toc]]

## My `.editorconfig`
`EditorConfig` helps developers define and maintain `consistent coding styles` between different editors and IDEs. The EditorConfig project consists of a file format for defining coding styles and a collection of text editor plugins that enable editors to read the file format and adhere to the defined styles.

```bash
# This file is the top-most EditorConfig file
root = true

# All Files
[*]
charset = utf-8
indent_style = space
indent_size = 4
insert_final_newline = true
trim_trailing_whitespace = true

##########################################
# File Extension Settings
##########################################

# XML Configuration Files
[*.{xml, config, props, targets, nuspec, resx, ruleset, vsixmanifest, vsct}]
indent_size = 2

# JSON Files
[*.{json, json5, webmanifest}]
indent_size = 2

# YAML Files
[*.{yml, yaml}]
indent_size = 2

# Markdown Files
[*.md]
trim_trailing_whitespace = false

# Web Files
[*.{htm, html, css, sass, scss, less, svg}]
indent_size = 2

# javascripts Files
[*.{js, jsm, ts, tsx, vue, svelte}]
indent_size = 2

# Batch Files
[*.{cmd, bat}]
end_of_line = crlf

# Bash Files
[*.sh]
end_of_line = lf

# Makefiles
[Makefile]
indent_style = tab

```
