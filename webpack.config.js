var path = require('path');
var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {

  entry: [
    'react-hot-loader/patch',
    'webpack-dev-server/client?http://localhost:5000',
    'webpack/hot/only-dev-server',
    './site/src/index.js'
  ],

  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'site', 'dist'),
    publicPath: '/site/dist/'
  },

  devtool: 'cheap-module-inline-source-map',

      module: {
    loaders: [
      { test: /\.css$/,  loader: 'style-loader!css-loader' },
       //{ test: /\.css$/, loader: ExtractTextPlugin.extract({fallback:'style-loader',use: 'css-loader'}) },
      { test: /\.js[x]?$/,  exclude: /node_modules/, loader: 'babel-loader' },
      { test: /\.(png|jpg|jpeg|gif|woff)$/, loader: 'file-loader?name=images/[name].[ext]' }
 //{ test: /\.(png|jpg|jpeg|gif|woff)$/, loader: 'url-loader?limit=8192' }
    ]
  },


  plugins: [
    //new ExtractTextPlugin({ filename: 'css/[name].css', disable: false, allChunks: true }),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
  ],

  devServer: {
    host: 'localhost',
    port: 5000,
    historyApiFallback: true,
    hot: true
  }
  
};

