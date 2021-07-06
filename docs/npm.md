<div align="center">
  <span class="iconify" data-icon="fa-brands:node" data-inline="false" width="100"></span>
</div>

<h3>table of content</h3>

[[toc]]

## Manage the versions of `node`
install npm based `npm manager`

```bash
# install npm
$ brew install npm
# install npm-based node manager
$ npm install -g n
# show current node version, if installed previously
$ n
$ sudo n lts
$ sudo n 13.12.0

# select the version
$ sudo n

sh-3.2# n
   installed : v14.15.4 to /usr/local/bin/node
      active : v12.10.0 at /usr/local/Cellar/node/12.10.0/bin/node
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

## Error handling
```bash
Couldn't find package “react” on the “npm” registry when creating a package

```
### delete the registry for cleaning up
```bash
npm config delete registry 
```



