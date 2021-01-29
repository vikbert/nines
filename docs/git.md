<div align="center">
<img src="https://cdn.iconscout.com/icon/free/png-256/git-225996.png" width="80">
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
