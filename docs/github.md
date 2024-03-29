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

**delete remote repository**
Go to `https://github.com/settings/tokens` and activate the option named `delete_repo` in the access_token used by `hub` CLI, then `update token`.
```bash
hub delete vikbert/myDemoRepo
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
