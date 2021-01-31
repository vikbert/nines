<div align="center">
  <span class="iconify" data-icon="fa-brands:php" data-inline="false" width="80"></span>
</div>

<h3>table of content</h3>

[[toc]]

## Test PHP in console

#### installl

```bash
 $ composer g require psy/psysh:@stable
 $ psysh
```

#### then add `PATH` to the shell config

```bash
# add this line in .bash_profile
 export PATH="/Users/zhoux/.composer/vendor/bin:$PATH"
```

#### More about psysh

<https://psysh.org/>

## Install PHP via `brew`
```bash
brew install php@7.4

==> Summary
🍺  /usr/local/Cellar/php@7.4/7.4.14_1: 497 files, 72.2MB
```


## Switch PHP version
first of all, check the list of all installed php versions and current version

```bash
$ ls -al /usr/local/etc/php/
$ ls -al /usr/local/opt/ | grep php

lrwxr-xr-x    1 zhoux  admin    21 Jan 31 19:17 php -> ../Cellar/php/8.0.1_1
lrwxr-xr-x    1 zhoux  admin    26 Jan 31 18:08 php@7.2 -> ../Cellar/php@7.2/7.2.34_1
lrwxr-xr-x    1 zhoux  admin    26 Jan 31 19:16 php@7.3 -> ../Cellar/php@7.3/7.3.26_1
lrwxr-xr-x    1 zhoux  admin    26 Jan 31 19:17 php@7.4 -> ../Cellar/php@7.4/7.4.14_1
lrwxr-xr-x    1 zhoux  admin    21 Jan 31 19:17 php@8.0 -> ../Cellar/php/8.0.1_1

$ php -v

PHP 8.0.1 (cli) (built: Jan  8 2021 09:07:02) ( NTS )
```
then, create command alias to switch php via `brew link`
```bash
alias php74 'brew unlink php && brew link --overwrite --force php@7.4'
alias php80 'brew unlink php && brew link --overwrite --force php@8.0' 
```

at last, type `php80` or `php74` to switch php





**reference**

[switch between php versions on mac os]([https://](https://stackoverflow.com/questions/34909101/how-can-i-easily-switch-between-php-versions-on-mac-osx)link)
