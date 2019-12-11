const path = require('path');
const SOURCE_DIR = path.resolve(__dirname);
const BUILD_DIR = path.resolve('../dist');

module.exports = {
  entry: SOURCE_DIR + '/client/index.jsx',
  output: {
    path: BUILD_DIR,
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        loader: 'babel-loader',
        exclude: '/node_modules/',
        options: {
          presets: ['@babel/preset-env', '@babel/preset-react']
        }
      }
    ]
  },
  devtool: 'source-map'
}
