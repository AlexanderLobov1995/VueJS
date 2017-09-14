const webpack = require('webpack');
const path = require('path');
const HtmlPlugin = require('html-webpack-plugin');


module.exports = {
  entry: {
    app: './app/main.js'
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js'
  },
  resolve: {
    extensions: ['.js', '.vue'],
    alias: {
      'vue': 'vue/dist/vue.common.js'
    }
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: {
          loaders: {
            'css': 'vue-style-loader!css-loader'
          }
        }
      }
    ]
  },
  plugins: [
    new HtmlPlugin({template: './index.html'})
  ]
};