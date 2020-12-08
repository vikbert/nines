<div align="center">
    <span class="iconify" data-icon="bytesize:github" data-inline="false" width="100"></span>
</div>

## Create a GitHub Repository via `CLI`

**create local repo**

```bash
 mkdir myDemoRepo
 cd myDemoRepo
 git init
 touch README.md
 git add .
 git commit 'init commit'
```

**push local repo to remote github**

```bash
hub create myDemoRepo
git push --set-upstream origin master
```

**install `hub` command tools**

```bash
 brew install hub
 hub --help
 hub api
 # enter the github `user` and `password`
```
