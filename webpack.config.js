'use strict'

const HtmlWebPack = require('html-webpack-plugin')

module.exports = {
  mode: "development",

  output : {
    clean: true
  },

  module : {
    rules:[
      {
        test: /\.html$/i,
        loader: 'html-loader',
        options: {
          sources: false
        }
      }
    ]
  },
  
  optimization: {},

  plugins : [
    new HtmlWebPack({
      title: 'My Webpack App',
      filename: 'index.html',
      template: './src/index.html'
    })
  ]
}