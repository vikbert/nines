<div align="center">
    <img class="page__header" src="https://upload.wikimedia.org/wikipedia/commons/2/26/Logo-composer-transparent.png" width="80"/>
</div>

## Understand versions

| Name     | Exampe            | Description                                              |
| -------- | ----------------- | -------------------------------------------------------- |
| specific | 1.0.2             | specify the exact version                                |
| range    | >=1.0; >1.0, <2.0 | specify the range of versions                            |
| widlcard | 3.4.\*            | specify a pattern with a `*` wildcard                    |
| tilde    | ~1.2              | specify semantic version, is equivalent to `>=1.2, <2.0` |

## Composer Commands

```bash
# reuqire: the most used command
composer require zebra/zebra
# require global
composer require global zebra/zebra
composer require global zebra/zebra:2.1.0
# show all packages name from your project
composer show
 # remove package
composer remove phpoffice/phpspreadsheet
 # install packages from lock file
composer install
# update packages for the lastest version
composer update -vvv
composer update zebra/zebra -vvv
composer global update zebra/zebra -vvv
# install packages for the stable versions
composer update --prefer-stable -vvv
# validate the composer.json with composer.lock
composer validate
# do partial updates work
composer update --dry-run zebar/zebra --with-dependencies
# Autoloader optimization
composer install --optimize-autoloader
```

## Composer.json & composer.lock

::: tip composer.lock
add always composer.lock to `git` in a application. Without committing the `composer.lock`, you won't get the exact the same set of dependencies.
:::

::: tip sort packages
It is best to configure the `sorting` in `composer.json`, to keep the packages in `require` and `require-dev` sorted by name.
:::

```json
 "config": {
   "sort-packages": true
 }
```

::: tip validate the `composer.json`
composer.json and composer.lock should be always kept in sync.
:::

```bash
 composer validate --no-check-all --strict
```

::: tip specify the production PHP version
Just specify the production PHP version in config section of `composer.json`
:::

```json
"config": {
    "platform": {
        "php": "7.1"
    }
}
```

::: tip speed up the package installation
Install composer plugin `hirak/prestissimo` which speeds up by downloading them in parallel.
:::

```bash
composer global require hirak/prestissimo
```

## Composer global packages

```bash
 composer global require friendsofphp/php-cs-fixer
 composer global require squizlabs/php_codesniffer
```

## upgrade composer
upgrade or reinstall composer CLI
```bash
 php -r "copy('https://getcomposer.org/installer', 'composer-setup.php');" 
 php composer-setup.php
 php -r "unlink('composer-setup.php');"
 mv composer.phar composer
 chmod +x composer
 rm -rf /usr/local/bin/composer
 mv composer /usr/local/bin
```

## upgrade composer via `symfony` command
```bash
 symfony composer self-update 
```



