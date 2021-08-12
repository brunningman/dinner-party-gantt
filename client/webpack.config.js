const path = require('path');

const SRC_DIR = path.join(__dirname, '/src');
const DIST_DIR = path.join(__dirname, '/dist');

module.exports = {
  mode: 'development',
  devtool: 'source-map',
  devServer: {
    contentBase: './web',
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx'],
  },
  entry: `${SRC_DIR}/index.tsx`,
  output: {
    filename: 'bundle.js',
    path: DIST_DIR,
    publicPath: '/public',
  },
  module: {
    rules: [
      {
        test: /\.ts(x?)$/,
        exclude: /node_modules/,
        use: [{ loader: 'ts-loader' }],
      },
      {
        enforce: 'pre',
        test: /\.js$/,
        loader: 'source-map-loader',
      },
      {
        test: /\.jsx?/,
        exclude: /node_modules/,
        include: SRC_DIR,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-react', '@babel/preset-env'],
          },
        },
      },
    ],
  },
};
