<div align="center">
  <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/db/Npm-logo.svg/800px-Npm-logo.svg.png" width="80"/>
</div>

<h3>table of content</h3>

[[toc]]

## Manage node and npm
install npm based `npm manager`

```bash
# install npm
$ brew install npm
# install npm-based node manager
$ npm install -g n
# show current node version, if installed previously
$ n
# install latestest node
$ sudo n latest

```

## Publish/Deploy NPM package
```bash
# generate the version number before publish
npm verion major  # generate major version number
npm verion minior  # generate minor version
npm version patch  # generate patch version

# publish to npm repo.
npm publish --access=public
```
use the `.npmignore` file to ignore the source files, that are not for publish
```bash
## .npmignore example
.gitignore
.npmignore
.prettierignore
.sasslintrc
.travis.yml
changelog.md
composer.json
package-lock.json
package.js
package.json
test
deploy.sh
rollup.config.js
```

## Unpublish the version
```bash
 npm unpublish pixss@3.0.0 
```


