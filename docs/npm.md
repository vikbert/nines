<div align="center">
  <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/db/Npm-logo.svg/800px-Npm-logo.svg.png" width="80"/>
</div>

## Install node and npm
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

## Dev and deploy your NPM
```bash
# generate the version number before publish
npm verion major  # generate major version number
npm verion minior  # generate minor version
npm version patch  # generate patch version

# publish to npm repo.
npm publish --access=public
```

