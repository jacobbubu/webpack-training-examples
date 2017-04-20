import webpack from 'webpack';
import path from 'path';

const { CommonsChunkPlugin } = webpack.optimize;

module.exports = {
  entry: {
    entry1: './src/entry1.js',
    entry2: './src/entry2.js',
  },
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: '[name].[chunkhash].js',
  },
  module: {
    rules: [{
      test: /\.js$/,
      exclude: /(node_modules)/,
      use: [{
        loader: 'babel-loader',
        options: {
          presets: [[ 'es2015', { modules: false } ]],
        }
      }]
    }]
  },
  plugins: [
    new CommonsChunkPlugin({
      name: 'common'
    })
  ],
};
