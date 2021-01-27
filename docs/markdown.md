<div align="center">
    <img src="https://cdn0.iconfinder.com/data/icons/octicons/1024/markdown-512.png" width="80">
</div>

<h3>table of content</h3>

[[toc]]

## TOC in normal `markdown`
use the simple `go` script to generate the `TOC` from any markdown file.

```bash
$ curl https://raw.githubusercontent.com/ekalinin/github-markdown-toc/master/gh-md-toc -o toc
$ chmod a+x toc
$ mv toc /usr/local/bin
$ toc README.md
```

## TOC in `vuepress markdown`
use the `vuepress marco` tag `[[toc]]`

example:

```bash
<h3>table of content</h3>

[[toc]]
```

