<div align="center">
  <span class="iconify" data-icon="la:yarn" data-inline="false" width="100"></span>
</div>

<h3>table of content</h3>

[[toc]]

## clean cache

> !!Incorrect integrity when fetching from the cache

`solution`

```
yarn clean cache
yarn install -f
```

## Error handling
```bash
yarn add v1.22.10
info No lockfile found.
[1/4] 🔍  Resolving packages...
error Couldn't find package "react" on the "npm" registry.
info Visit https://yarnpkg.com/en/docs/cli/add for documentation about this command

```
### delete the registry for cleaning up
```bash
npm config delete registry 
```
