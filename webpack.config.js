const path = require('path')
const fs = require('fs')

const CWD = process.cwd()
const SRC = path.resolve(CWD, 'src')
const BUILD = path.resolve(CWD, 'build')

const entry = fs.readdirSync(SRC)
  .filter((file) => {
    return file.match(/.*\.js$/)
  })
  .reduce((result, file) => {
    result[path.basename(file, '.js')] = [
      'regenerator-runtime/runtime',
      path.resolve(SRC, file)
    ]
    return result
  }, {})

module.exports = {
  entry: entry,
  module: {
    rules: [
      {
        test: /\.(js)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      }
    ]
  },
  output: {
    filename: '[name].js',
    path: BUILD,
    libraryTarget: 'commonjs',
    globalObject: "this",
    publicPath: '/'
  },
  optimization: {
    // We no not want to minimize our code.
    minimize: false
  }
}