const path = require('path')
const { resolve } = require( 'path' )

// for production mode

// module.exports = {
//   entry: './src/index.js',
//   output: {
//     filename: 'bundle.js',
//     path: resolve( __dirname, 'dist' )
//   },
//   target: 'node',
//   mode: 'production'
// }

// for development 

module.exports = {
  entry: './src/forserver.js',
  output: {
    filename: 'bundle_index.js',
    path: resolve( __dirname, 'dist2' )
  },
  target: 'node',
  mode: 'development',
  devServer: {
    static: {
      directory: resolve( __dirname, '')
    }
  }
}