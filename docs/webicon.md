<div align="center">
  <span class="iconify" data-icon="fa-solid:icons" data-inline="false" width="100"></span>
</div>

---

<h3>table of content</h3>

[[toc]]

## Use `iconify` as `script`

1. insert the `script` block to the index page or template
```html
 <script src="https://code.iconify.design/1/1.0.7/iconify.min.js"></script> 
```

2. find the required icon from [iconify](https://iconify.design/icon-sets/)
```html
 https://iconify.design/icon-sets/ 
```


3. copy the snippet and insert the code, where you needed
```html
 <span class="iconify" data-icon="fa-solid:icons" data-inline="false"></span> 
```

## Use `iconify` in `vuepress`
```js
 // config.js
   head: [
    [
      'script',
      {
        src: `https://code.iconify.design/1/1.0.7/iconify.min.js`,
      },
    ],
  ], 
```
