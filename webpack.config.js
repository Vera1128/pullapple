/**
 * Created by xyy on 2017/3/31.
 */
var path = require('path');

module.exports = {
  entry:  path.resolve(__dirname, './src/entry/main.js'),
  output: {
    path: path.resolve(__dirname, './build'),
    filename: 'bundle.js',
  },
  module: {
    loaders: [{
      test: /\.jsx?$/,
      exclude: /node_modules/,
      loader: 'babel-loader',
      query:
        {
          presets: ['es2015','react']
        }
    },
      {
        test: /\.scss$/,
        exclude: /node_modules/,
        loader: 'style-loader!css-loader!sass-loader',
      },
      {
        test: /\.(png|jpg)$/,
        exclude: /node_modules/,
        loader: 'url-loader',
      }
    ]
  }
};