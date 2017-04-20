import webpack from 'webpack';
import path from 'path';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import StatsPlugin from 'stats-webpack-plugin';
import ExtractTextPlugin from 'extract-text-webpack-plugin';

const { CommonsChunkPlugin } = webpack.optimize;

module.exports = {
  entry: {
    entry1: './src/entry1.js',
  },
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: '[name].[chunkhash].js',
    // Sub chunk 的命名方式
    chunkFilename: '[name].[chunkhash].js',
  },
  profile: true,
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        use: [{
          loader: 'babel-loader',
          options: {
            presets: [[ 'es2015', {modules: false} ]],
            plugins: ['syntax-dynamic-import'],
          }
        }]
      },
      {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract({
          fallbackLoader: 'style-loader',
          loader: 'css-loader',
        }),
      },
      // {
      //   test: /\.css$/, loader: 'css-loader'
      // },
    ]
  },
  plugins: [
    new ExtractTextPlugin({
      filename: 'app-[hash].css',
      disable: false,
      allChunks: true,
    }),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'manifest',
      minChunks: Infinity,
    }),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: 'template.html'
    }),
    new StatsPlugin('stats.json', {
      chunkModules: true,
    }),
  ],
};
