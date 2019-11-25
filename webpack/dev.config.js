/**
 * DEVELOPMENT WEBPACK CONFIGURATION
 */

const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CircularDependencyPlugin = require("circular-dependency-plugin");

module.exports = require("./base.config")({
  mode: "development",

  // Add hot reloading in development
  entry: [
    require.resolve("babel-polyfill"),
    "webpack-hot-middleware/client?http://localhost:3000",
    path.join(process.cwd(), "./src/index.js"),
  ],
  devServer: {
    contentBase: "./src",
    compress: true,
    port: 3000,
    hot: true,
    historyApiFallback: true,
    disableHostCheck: true
  },
  optimization: {
    splitChunks: {
      chunks: "all",
    },
  },

  // Add development plugins
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      inject: true,
      template: "./public/index.html",
    }),
    new CircularDependencyPlugin({
      exclude: /a\.js|node_modules/, 
      // exclude node_modules
      failOnError: false, 
      // show a warning when there is a circular dependency
    }),
  ],

  // Emit a source map for easier debugging
  // See https://webpack.js.org/configuration/devtool/#devtool
  devtool: "eval-source-map",

  performance: {
    hints: false,
  },
});
