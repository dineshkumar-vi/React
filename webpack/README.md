# Webpack Configuration

# Version :  4.16.5

Webpack configuration with devlopment and production mode. We used following plugins for build our application.

# Build Directory  : /dist

```
.
├── Assets
│
├── index.html  # Main html file
│
├── main.chunk.js
│
├── runtime~main.js
│
└── vendor.chunk.js.map     

```

### Babel Plugins

- [ ] [@babel/core](https://babeljs.io/)
- [ ] [@babel/plugin-proposal-class-properties](https://www.npmjs.com/package/@babel/plugin-proposal-class-properties)
- [ ] [@babel/plugin-transform-runtime](https://babeljs.io/docs/en/babel-plugin-transform-runtime)
- [ ] [@babel/preset-env](https://babeljs.io/)
- [ ] [@babel/preset-react](https://babeljs.io/)
- [ ] [babel-polyfill](https://babeljs.io/)
- [ ] [babel-loader](https://github.com/babel/babel-loader)

### Webpack Plugins

- [ ] [webpack](https://github.com/webpack/webpack)
- [ ] [webpack-cli](https://github.com/webpack/webpack-cli#readme)
- [ ] [webpack-dev-server](https://github.com/webpack/webpack-dev-server#readme)
- [ ] [webpack-hot-middleware](https://github.com/webpack-contrib/webpack-hot-middleware#readme)

### Webpack Dev Plugins

- [ ] [circular-dependency-plugin](https://github.com/aackerman/circular-dependency-plugin#readme)

### Webpack Prod Plugins

- [ ] [clean-webpack-plugin](https://github.com/johnagan/clean-webpack-plugin)
- [ ] [copy-webpack-plugin](https://github.com/webpack-contrib/copy-webpack-plugin)
- [ ] [html-webpack-plugin](https://github.com/jantimon/html-webpack-plugin)
- [ ] [uglifyjs-webpack-plugin](https://github.com/webpack-contrib/uglifyjs-webpack-plugin)
- [ ] [optimize-css-assets-webpack-plugin](http://github.com/NMFR/optimize-css-assets-webpack-plugin)
- [ ] [cssnano](https://github.com/cssnano/cssnano)

### Webpack Bundle Analysier

- [ ] [webpack-bundle-analyzer"](https://github.com/webpack-contrib/webpack-bundle-analyzer)



## Webpack

Babel : https://github.com/babel/babel-loader#options

 ##  cacheDirectory: 
 
 Default false. When set, the given directory will be used to cache the results of the loader. Future webpack builds will attempt to read from the cache to avoid needing to run the potentially expensive Babel recompilation process on each run. If the value is blank (loader: 'babel-loader?cacheDirectory') or true (loader: 'babel-loader?cacheDirectory=true'), the loader will use the default cache directory in node_modules/.cache/babel-loader or fallback to the default OS temporary file directory if no node_modules folder could be found in any root directory.


## babel-plugin-transform-runtime

A plugin that enables the re-use of Babel's injected helper code to save on codesize.

npm install --save-dev @babel/plugin-transform-runtime

## @babel/plugin-proposal-class-properties

This plugin transforms static class properties as well as properties declared with the property initializer syntax

https://www.npmjs.com/package/@babel/plugin-proposal-class-properties


## clean-webpack-plugin

A webpack plugin to remove/clean your build folder(s) before building

https://www.npmjs.com/package/clean-webpack-plugin


## webpack-bundle-analyzer

Visualize size of webpack output files with an interactive zoomable treemap.

URL : http://127.0.0.1:8888/
