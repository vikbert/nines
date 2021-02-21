<div align="center">
<span class="iconify" data-icon="cib:git" data-inline="false" width="100"></span>
</div>

---

<h3>table of content</h3>

[[toc]]


## remove `node_modules` from `git`
```bash
echo '**/node_modules' >> .gitignore
git rm -r --cached node_modules
git add .
git commit -m 'remove gitignore folder node_modules'
git push -f

# or
git push origin master
```

## update the ref for remote
```bash
git remote update --prune 
```

## show remote branch with author name
```bash
git for-each-ref --sort=committerdate --format='%(committerdate) %09 %(authorname) %09 %(refname)' refs/remotes 
```

## delete remote branch
```bash
git push origin --delete feature/branch-name
```

## push local branch to remote
```bash
git push -u origin feature/branch-name 
```


