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


## switch PHP version
first of all, check the list of all installed php versions and current version

```bash
➜ ls -al /usr/local/etc/php/
total 0
drwxr-xr-x   6 zhoux  admin  192 Jan 31 17:22 .
drwxrwxr-x  21 zhoux  admin  672 Jan 31 17:22 ..
drwxr-xr-x  10 zhoux  admin  320 Sep 16 09:51 7.2
drwxr-xr-x   9 zhoux  admin  288 Jan 31 17:18 7.3
drwxr-xr-x   8 zhoux  admin  256 Nov 18 20:51 7.4
drwxr-xr-x   7 zhoux  admin  224 Jan 31 17:22 8.0 

➜ php -v
PHP 8.0.1 (cli) (built: Jan  8 2021 09:07:02) ( NTS )

```





**reference**

[switch between php versions on mac os]([https://](https://stackoverflow.com/questions/34909101/how-can-i-easily-switch-between-php-versions-on-mac-osx)link)
