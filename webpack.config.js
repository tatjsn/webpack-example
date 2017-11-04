const webpack = require('webpack');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');

module.exports = {
  module: {
    loaders: [
      { test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader' },
    ],
  },
  plugins: [
    new webpack.optimize.CommonsChunkPlugin({
      name: 'commons',
    }),
    new UglifyJSPlugin(),
  ]
};
