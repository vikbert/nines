<img class="page__header" src="https://upload.wikimedia.org/wikipedia/commons/2/26/Logo-composer-transparent.png" width="200"/>

## Understand versions

```json
// specific version
"symfony/yaml": "4.0.2"

//
```

## Commands

```bash
 # remove  package
 compose remove phpoffice/phpspreadsheet
```

## Tips

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
