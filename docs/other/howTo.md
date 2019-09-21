::: tip Install and Start
Install packages and start the dev server: <http://localhost:8080/nines/>
:::

```bash
$ yarn install
$ yarn start
```

::: tip Deploy
use `bash deploy.sh` to deploy and push the code to github. The pages are served on GitHub.io: <https://vikbert.github.io/nines/>
:::

```bash
# build and deploy to github pages
$ bash deploy.sh
```

::: tip New Page

- create a new markdown file in `./docs/react.md`
- add the link to sidebar by editing `./docs/.vuepress/config.js`
  :::

```js
sidebar: [
  ['/', '🏠HOME'],
  ['/react', ' React'],
  ['/npm', ' npm'],
  ['/composer', ' Composer'],
  ['/symfony', ' Symfony']
];
```

::: tip New Link
add new item to `./docs/.vuepress/config.js`
:::

```js
 nav: [{ text: 'Write To Me', link: '/other/talk' }],
```

::: tip Styles
use `override.styl` and `stlye.styl` to customer the stylesheet
:::

```stylus
// .vuepress/style.styl, will overwrite the default theme
.site-name {
  font-family:   'Major Mono Display', cursive;
  font-weight: 400 !important
  font-size: 2rem !important
}

```

```stylus
// .vuepress/override.styl, SHOULD ONLY contain "stylus constants override".
$accentColor = #029ffd
$textColor = #2c3e50
$borderColor = #eaecef
$codeBgColor = #282c34
```

::: tip How to import new fonts
use `head` config to update head in `./docs/.vuepress/config.js`
:::

```js
 head: [
    [
      'link',
      {
        rel: 'alternate',
        type: 'application/rss+xml',
        href: '/rss.xml',
        title: 'Review Everything in 9 seconds'
      }
    ]
  ],
```
