const path = require('path');

module.exports = {
  entry: path.resolve(__dirname, 'src', 'views', 'client.js'),
  output: {
    path: path.resolve(__dirname, '..', 'nginx', 'public'),
    filename: 'client.js'
  },
  target: 'web',
  mode: 'production',
  module: {
    rules: [
      {
        test: /\.js$/,
        use: {
          loader: 'babel-loader'
        },
        include: path.resolve(__dirname, 'src', 'views'),
        exclude:/(node_modules|bower_components)/,
      },
      {
        test: /\.tsx?$/,
        loader: 'ts-loader',
        include: path.resolve(__dirname, 'src', 'views'),
        exclude: /node_modules/,
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.jsx', '.tsx', '.ts']
  }
}
