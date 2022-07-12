'use strict'

const HtmlWebPack = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyPlugin = require('copy-webpack-plugin');

module.exports = {
  mode: "development",

  output: {
    clean: true
  },

  module: {
    rules: [
      {
        test: /\.html$/i,
        loader: 'html-loader',
        options: {
          sources: false
        }
      }, {
        test: /\.css$/,
        exclude: /styles.css$/,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /styles.css$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader']
      },
      {
        test: /\.(png|jpg?g|gif)$/i,
        use: [{
          loader: 'file-loader'
        }]
      }
    ]
  },

  optimization: {},

  plugins: [
    new HtmlWebPack({
      title: 'My Webpack App',
      filename: 'index.html',
      template: './src/index.html'
    }),

    new MiniCssExtractPlugin({
      filename: 'new-style.css',
      ignoreOrder: false
    }),

    new CopyPlugin({
      patterns:[
        { from: './src/assets/', to: 'assets/'}
      ]
    })

  ]
}