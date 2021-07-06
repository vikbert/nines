<div align="center">
  <span class="iconify" data-icon="fa-brands:react" data-inline="false" width="100"></span>
</div>


<h3> Table of content</h3>

[[toc]]

## Start Online
[codesandbox: react.js :link: ](https://codesandbox.io/s/new)

## `create-react-app` CLI

```bash
npx create-react-app react-demo
```

## Tweet, notification, snackbar
```bash
npm i native-toast 
```
add a hook
```js
import nativeToast, {ToastOptions} from 'native-toast';

const useToast = () => {
  const notify = (options) => {
    nativeToast({
      type: options.type,
      message: options.message,
      position: 'north',
      timeout: 3000,
      edge: true,
    });
  };

  return notify;
};

export default useToast;
```
use the hook to show the toast message
```js
// import this css in the main component
import 'native-toast/dist/native-toast.css';

// use the toast hook
const notify = useToast();
notify({type: 'success', message: 'hello, world!'});
  
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





