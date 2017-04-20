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
      name: 'common',

      // 只要被共享两次的 Module 就进入 Common Chunk，
      // 缺省是必须被所有 Chunk 共享的 Module 才会进入
      minChunks: 2,
    }),
    new CommonsChunkPlugin({
      names: 'manifest',

      // 没有实际的 Module 会进入 manifest
      minChunks: Infinity,
    }),
  ],
};



