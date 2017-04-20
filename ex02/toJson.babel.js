import fs from 'fs';
import path from 'path'

function extractAssetsToJson() {
  this.plugin('done', function(stats) {
    fs.writeFileSync(
      path.join(__dirname, "build", "stats.json"),
      JSON.stringify(stats.toJson(), null, 2)
    );
  });
}

module.exports = {
  entry: {
    entry1: './src/entry1.js',
    entry2: './src/entry2.js',
  },
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: '[name].[hash].js',
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
  plugins: [extractAssetsToJson],
};
