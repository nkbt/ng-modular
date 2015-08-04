var path = require('path');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: {
    app: './src/app.js'
  },
  output: {
    filename: '[name].js',
    path: './example',
    chunkFilename: '[id].chunk.js'
  },
  module: {
    loaders: [
      {test: /\.js$/, loader: 'babel', include: path.resolve('src')},
      {test: /\.css$/, loader: ExtractTextPlugin.extract('style', 'css?sourceMap')},
      {test: /\.html$/, loader: 'ng-cache?prefix=[dir]/[dir]'}
    ],
    preLoaders: [{test: /\.js$/, loader: 'eslint', include: path.resolve('src')}],
    resolve: {
      alias: {
        angular$: path.resolve('src', 'vendor', 'angular.js'),
        npm$: path.resolve('node_modules')
      }
    }
  },
  plugins: [
    new ExtractTextPlugin('style.css', {allChunks: true}),
    new HtmlWebpackPlugin({
      template: path.resolve('src', 'index.html'),
      inject: 'body'
    })
  ],
  devtool: 'eval-source-map',
  devServer: {
    historyApiFallback: true,
    stats: {
      chunkModules: false,
      colors: true
    },
    contentBase: './src'
  },
  eslint: {
    configFile: './src/.eslintrc'
  }
};
