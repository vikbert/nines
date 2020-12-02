<div align="center">
  <img src="https://cdn.iconscout.com/icon/free/png-256/symfony-282493.png" width="80"/>
</div>

## Upgrade `composer` in `symfony`
```bash
 symfony composer self-update 
```

## List the symfony `recipes`
```bash
 symfony composer recipes 
```

## add React to Symfony
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





