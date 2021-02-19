const path = require('path');

module.exports = {
  entry: path.resolve(__dirname, 'dist', 'views', 'client.js'),
  output: {
    path: path.resolve(__dirname, '..', 'nginx', 'public'),
    filename: 'client.js'
  },
  target: 'web',
  mode: 'production',
  resolve: {
    extensions: ['.js']
  }
}
