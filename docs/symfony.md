<div align="center">
  <img src="https://cdn.iconscout.com/icon/free/png-256/symfony-282493.png" width="80"/>
</div>

## Symfony 5: getting start

### init project
```bash
symfony new todoApp
```


### start project
```bash
symfony server:start 
```

### add routing
```bash
composer require annotations 
```

### add controller
> enable symfony in phpstorm editor
```
/**
 * @Route("/")
 * @Route("/todos")
 */
public function todos(): JsonResponse
{
    return new JsonResponse(['it works']);
}
```

### add twig
> it needs `symfony/twig-pack`
```
composer require twig
````
- ✅ controller needs extend the `AbstractController` to use `render()`
- ✅ extends 'base' in current twig
```twig
{% extends 'base.html.twig' %}

{% block body %}
    <h1>
        {{ message }}
    </h1>
{% endblock %}
```

### add assets
> it needs `symfony/asset`
```
composer require asset
```
✅ link the assets resource in 'base.html.twig'
```twig
{% block stylesheets %}
    <link href="{{ asset('css/main.css') }}" rel="stylesheet"/>
{% endblock %}
```

### add translation
```bash
// install package
composer require symfony/translation
```

✅ config translation
```
framework:
    default_locale: en
    translator:
        default_path: '%kernel.project_dir%/translations'
        fallbacks:
            - de
``` 
✅ use translation in twig
```twig
{% trans_default_domain 'app' %}

{% block body %}
    <h1>
        {{ 'list.headline'|trans }}
    </h1>
    <p>{{ 'list.title'|trans }}</p>
{% endblock %}
```
> use the following commands to manage the translation resources:
```bash
// debug trans in domain "app"
php bin/console debug:translation --domain=app de
php bin/console debug:translation --domain=app de --only-unused


// preview translations for specific domain "app"
php bin/console translation:update --dump-messages --sort=asc --output-format=yaml --domain=app de

// preview and write them into translations
// output: app+intl-icu.de.yaml
php bin/console translation:update --dump-messages --sort=asc --output-format=yaml --domain=app de --force
```
### add behat tests
> in sf5, just add the nice extension comming from `friends-of-behat`
```bash
composer require friends-of-behat/symfony-extension
vendor/bin/behat 
```

### add login form
> we use `MakeBundle` to generate the essential files.
```bash
composer require security 
composer require make

// generate the 
php bin/console make:auth 

// install doctrine
composer require symfony/orm-pack
```


### add database

### add doctrine migration


## Symfony 5 + React

### init symfony project and add packages
```bash
 symfony new reactSymfony
 cd reactSymfony

 composer require twig
 composer require asset
 composer require encore
 yarn install
 yarn dev
```
### add homepage
enable route "index"
```bash
 # routes.yml
 index:
   path: /
   controller: App\Controller\DefaultController::index
 
```
add DefaultController::index
```php
# ./src/Controller/DefaultController.php
namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;

class DefaultController extends AbstractController
{
    public function index (): Response
    {
        return $this->render('Default/index.html.twig', []);
    }
} 
```


add `Default/index.html.twig` page
```php
# ./templates/Default/index.html.twig
{% extends "base.html.twig" %}

{% block body %}
    <div id="root">symfony index page</div>
    <script type="text/javascript" src="{{ asset('build/app.js') }}"></script>
{% endblock %} 
```

load `app.css` in `base.html.twig`
```bash
 # base.html.twig
{% block stylesheets %}
    {{ encore_entry_link_tags('app') }}
{% endblock %} 
```

test laoding css and js on homepge on `localhost:8000`
```bash
 symfony server:start 
```

### add React to Symfony
add react packages
```bash
 yarn add --dev react react-dom @babel/preset-react
```
remove line in `webpack.config.js`
```bash
  // .splitEntryChunks() 
```
disable line in `webpack.config.js`
```bash
 .disableSingleRuntimeChunk() 
```

enable line in `webpack.config.js`
```bash
 .enableReactPreset()
```

update `app.js`
```js
import '../css/app.css';

import React from 'react'
import ReactDOM from 'react-dom'

const App = () => {
    return <h1>react works!</h1>
}

ReactDOM.render(<App/>, document.getElementById('root'));
```

rebuild the react Component and remove the cache and refresh symfony server
```bash
yarn dev
```

`react works!` should be displayed on the homepage.





