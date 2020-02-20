const path = require('path')
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')

const uglify = new UglifyJsPlugin({
  uglifyOptions: {
    output: {
      comments: false
    }
  }
})

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
          presets: ['env']
        }
      }
    ]
  },
  optimization: {
    minimizer: [uglify]
  }
}
