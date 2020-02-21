const path = require('path')
const TerserPlugin = require('terser-webpack-plugin');

const terser =new TerserPlugin()

module.exports = {
  entry: './src/index.js',
  mode: 'production',
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'partidos-promise.min.js',
    libraryTarget: 'commonjs2',
    library: 'partidos-promise'
  },
  target: 'node',
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        options: {
          presets: ['@babel/preset-env']
        }
      }
    ]
  },
  optimization: {
    minimizer: [terser]
  }
}
