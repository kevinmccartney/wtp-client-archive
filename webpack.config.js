const path = require('path');

const APP_DIR = path.resolve(__dirname, 'src');
const BUILD_DIR = path.resolve(__dirname, 'dist');

module.exports = {
  entry: {
    main: `${APP_DIR}/index.js`,
  },
  output: {
    path: BUILD_DIR,
    filename: '[name].bundle.js',
    publicPath: '/dist/',
    chunkFilename: '[id].bundle.js',
  },
  devtool: 'source-map',
  resolve: {
    extensions: [
      '.js',
      '.jsx',
    ],
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
};
