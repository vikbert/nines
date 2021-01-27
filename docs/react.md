<div align="center">
  <img src="https://cdn.iconscout.com/icon/free/png-256/react-2336950-1982831.png" width="80"/>
</div>


<h3> Table of content</h3>

[[toc]]

## Start Online
[codesandbox: react.js :link: ](https://codesandbox.io/s/new)

## `create-react-app` CLI

```bash
npx create-react-app react-demo
```

## Minimal Starter

check out the minimal react starter project with the following features:

- `hot-reloader`
- `Eslint`
- `style-loader` 
- `css-loader`
- `manifest`

::: tip Repository and live view

- GitHub :link: <https://github.com/vikbert/minimal-react-starter.git>
- Demo :link: <https://minimal-react-starter.netlify.com/>
  :::

```bash
git clone https://github.com/vikbert/minimal-react-starter.git
```

## React in Symfony
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





