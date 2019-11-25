/**
 * PRODUCUTION WEBPACK CONFIGURATION
 */


const path = require("path");
const webpack = require("webpack");
const CleanWebpackPlugin = require("clean-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
//const { HashedModuleIdsPlugin } = require("webpack");
const UglifyJsPlugin = require("uglifyjs-webpack-plugin");
const CompressionPlugin = require("compression-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const OptimizeCssAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const BundleAnalyzerPlugin = require("webpack-bundle-analyzer")
  .BundleAnalyzerPlugin;

module.exports = require("./base.config")({
  mode: "production",
  // In production, we skip all hot-reloading stuff
  entry: [
    require.resolve("babel-polyfill"),
    path.join(process.cwd(), "./src/index.js")
  ],
  
  // Utilize long-term caching by adding content hashes 
  //(not compilation hashes) to compiled assets
  output: {
    filename: "[name].[chunkhash].js",
    chunkFilename: "[name].[chunkhash].chunk.js"
  },

  optimization: {
    minimize: true,
    minimizer: [
      new UglifyJsPlugin({
        test: /\.js(\?.*)?$/i,
        cache: true,
        parallel: true,
        //Enable when source map required for production , 
        //Enable state will affect build performance
        // sourceMap:true,
        extractComments: true
      }),
      new OptimizeCssAssetsPlugin({
        cssProcessor: require("cssnano"),
        cssProcessorOptions:  {
          preset: ["default", { discardComments: { removeAll: true } }],
        },
        canPrint: false,
      })
    ],
    nodeEnv: "production",
    sideEffects: true,
    concatenateModules: true,
    splitChunks: {
      chunks: "all",
      minSize: 30000,
      minChunks: 1,
      maxAsyncRequests: 5,
      maxInitialRequests: 3,
      name: true,
      cacheGroups: {
        commons: {
          test: /[\\/]node_modules[\\/]/,
          name: "vendor",
          chunks: "all",
        },
        main: {
          chunks: "all",
          minChunks: 2,
          reuseExistingChunk: true,
          enforce: true,
        },
      },
    },
    runtimeChunk: true,
  },

  plugins: [
    new CleanWebpackPlugin(["./dist"], { root: process.cwd() , verbose: true }),
    // Minify and optimize the index.html
    //new BundleAnalyzerPlugin(),
    new HtmlWebpackPlugin({
      template: "./public/index.html",
      minify: {
        removeComments: true,
        collapseWhitespace: true,
        removeRedundantAttributes: true,
        useShortDoctype: true,
        removeEmptyAttributes: true,
        removeStyleLinkTypeAttributes: true,
        keepClosingSlash: true,
        minifyJS: true,
        minifyCSS: true,
        minifyURLs: true,
      },
      inject: true,
    }),
    new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/),
    
    new CopyWebpackPlugin([
      { from: "./src/Assets/", to: "./Assets/" }
    ]),
   
    // Enable the compression when its required for backup
    new CompressionPlugin({
      algorithm: "gzip",
      test: /\.js$|\.css$|\.html$/,
      threshold: 10240,
      minRatio: 0.8,
    }),

    // new HashedModuleIdsPlugin({
    //   hashFunction: "sha256",
    //   hashDigest: "hex",
    //   hashDigestLength: 20,
    // })
    
  ],
  devtool: "source-map"
});
