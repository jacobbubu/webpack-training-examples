import path from 'path';
import HtmlWebpackPlugin from 'html-webpack-plugin';

const isProduction = process.env.NODE_ENV === 'production';
const assetName = isProduction ? '[name].[chunkhash].js' : '[name].[hash].js'

module.exports = {
  entry: {
    entry1: './src/entry1.js',
    entry2: './src/entry2.js',
  },
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: assetName,
  },
  module: {
    rules: [{
      test: /\.js$/,
      exclude: /(node_modules)/,
      use: [{
        loader: 'babel-loader',
        options: {
          presets: ['es2015'],
        }
      }]
    }]
  },
  plugins: [new HtmlWebpackPlugin()],
};
