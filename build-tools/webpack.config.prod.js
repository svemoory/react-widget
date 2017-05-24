var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var env = process.env.NODE_ENV;

var reactExternal = {
  root: 'React',
  commonjs2: 'react',
  commonjs: 'react',
  amd: 'react'
};

var config = {
  entry: './src/index',
  externals: {
    'react': reactExternal,
  },
      module: {
    loaders: [
     // { test: /\.css$/,  loader: 'style-loader!css-loader' },
      { test: /\.css$/, loader: ExtractTextPlugin.extract({fallback:'style-loader',use: 'css-loader'}) },
      { test: /\.js[x]?$/,  exclude: /node_modules/, loader: 'babel-loader' },
 { test: /\.(png|jpg|jpeg|gif|woff)$/, loader: 'url-loader?limit=8192' }
    ]
  },
  output: {
    filename: 'dist/ReactWidget.min.js',
    library: 'ReactWidget',
    libraryTarget: 'umd',
  },
  plugins: [
    {
      apply: function apply(compiler) {
        compiler.plugin("parser", function(parser, options) {
          parser.plugin('expression global', function expressionGlobalPlugin() {
            this.state.module.addVariable('global', "(function() { return this; }()) || Function('return this')()")
            return false;
          });
        });
      }
    },
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(env)
    }),
        new ExtractTextPlugin({ filename: 'css/[name].css', disable: false, allChunks: true }),
  ]
}

if (env === 'production') {
  config.plugins.push(
    new webpack.optimize.UglifyJsPlugin({
      compressor: {
        pure_getters: true,
        unsafe: true,
        unsafe_comps: true,
        screw_ie8: true,
        warnings: false
      }
    })
  )
}

module.exports = config;