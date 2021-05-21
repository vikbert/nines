<div align="center">
    <span class="iconify" data-icon="simple-icons:heroku" data-inline="false" width="100"></span>
</div>


<h3>table of content</h3>

[[toc]]

## Deploy PHP project on Heroku

### step 1: config `Procfile`
```yaml
# add "Procfile" to the project root folder with the following content
web: vendor/bin/heroku-php-apache2 public/ 
```
### step 1: package `apache-pack`
```bash
composer req apache-pack 
```
> this package will add `public/.htaccess`, so that heroku can handle the routing correctly

## Resources

Heroku Url Rewrites

<https://devcenter.heroku.com/articles/deploying-symfony4#url-rewrites>
