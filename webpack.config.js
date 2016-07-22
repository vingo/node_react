var webpack = require('webpack');
var p1=require('./modules/m');
module.exports = {
  entry: './index.js',

  output: {
    filename: 'bundle.js',
    publicPath: ''
  },

  module: {
    loaders: [
      { test: /\.js$/,
       exclude: /node_modules/,
       loader: 'babel?presets[]=es2015&presets[]=react'
     }
    ]
  },
  resolve:{
    root: [ process.env.NODE_PATH ]
  },
  plugins:[
    // new webpack.optimize.UglifyJsPlugin({
    //   compress: {
    //       warnings: true
    //   }
    // }),
    new webpack.ProvidePlugin({
          $:"jquery",
    })

  ]
  // ,
  // resolveLoader: {
  //   modulesDirectories: [ process.env.NODE_PATH ]
  // }
  //
}