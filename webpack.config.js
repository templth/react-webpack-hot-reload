var webpack = require('webpack');
var path = require('path');

var BUILD_DIR = path.resolve(__dirname, 'src/client/public');
var APP_DIR = path.resolve(__dirname, 'src/client/app');
var PUBLIC_PATH = 'http://localhost:8080';

var config = {
  entry: [
    'webpack-dev-server/client?' + PUBLIC_PATH,
    'webpack/hot/dev-server',
    APP_DIR + '/index.jsx'
  ],
  output: {
    path: BUILD_DIR,
    //publicPath: 'http://localhost:8080/',
    filename: 'bundle.js',
    publicPath: PUBLIC_PATH + '/src/client'
  },
  module : {
    loaders : [
      {
        test : /\.jsx?/,
        include : APP_DIR,
      	loaders: ['react-hot', 'babel']
        //loader : 'babel'
      },
      /*{
      	test: /\.jsx?$/,
      	//loaders: ['react-hot', 'jsx?harmony'],
      	loaders: ['react-hot', 'babel'],
      	include: APP_DIR
      }*/
    ]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ]
};

module.exports = config;