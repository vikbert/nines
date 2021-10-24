<div align="center">
  <span class="iconify" data-icon="mdi:ssh" data-inline="false" width="100"></span>
</div>

<h3>table of content</h3>

[[toc]]

## create key-pair for `GitHub`
```bash
ssh-keygen -t ed25519 -C "my-mail@gmail.com" -f id_rsa_github
# Enter wihtout given a passphrase(I forgot always such password. better without setting them)
ssh-add ~/.ssh/id_rsa_github 
```

## add `pub ssh key` to GitHub
Go to <https://github.com/settings/keys> and add the `pub ssh key`
```bash
pbcopy < ~/.ssh/id_rsa_github.pub 
```



