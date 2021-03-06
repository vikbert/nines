<div align="center">
    <span class="iconify" data-icon="bytesize:github" data-inline="false" width="100"></span>
</div>

<h2> Table of content </h2>

[[toc]]

## Create remote Repository via CLI `hub`

**install `hub` cli**

```bash
 brew install hub
 hub --help
 # enter the github `user` and `password`
```

**push local repo to remote github**

```bash
hub create myDemoRepo
git push --set-upstream origin master
```


## Create `Oauth2` App
First of all, create the `Oauth2 app` in the github account to get the `clientID` and `clientSecret`. 

To do this, go to `github.com` and select `setting` => `developer settings` => `OAuth Apps` => `New OAuth App`.


![](./img/github-oauth2.png)


## Create gh-pages
create the static pages under `https://vikbert.github.io/🔥new-blog🔥`

**create the repository on GitHub**
```bash
https://github.com/vikbert/new-blog.git
```

**push the local repository to gh-pages**
```bash
git push -f https://github.com/vikbert/new-blog.git master:gh-pages 
```

::: tip
Sub page URL: [https://vikbert.github.io/new-blog](#)
:::

## Create Package Icons
generate the package icons via <https://shields.io/>

Examples:

![](https://img.shields.io/badge/Label-HelloWorld-brightgreen) 
![](https://img.shields.io/badge/Label-HelloWorld-blue) 
![](https://img.shields.io/badge/Label-HelloWorld-orange) 

## sync forked repository
### fork the project on github
```bash
https://github.com/andreia/awesome-symfony.git 
```

### clone the forked on local
```bash
git clone https://github.com/vikbert/awesome-symfony.git 
```

### add remote from original repository your forked repo
```bash
cd awesome-symfony/
git remote add upstream https://github.com/andreia/awesome-symfony.git
git fetch upstream master
```
### updating your fork from original
```bash
git pull upstream master 
```

## Create awesome project
```bash
npm install -g yo generator-awesome-list
 
```



