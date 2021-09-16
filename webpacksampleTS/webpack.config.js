// const { resolve } = require( 'path' )

// module.exports = {
//   entry: './src/index.ts',
//   output: {
//     filename: 'index_typescript_export.js',
//     path: resolve( __dirname, 'dist' )
//   },
//   module: {
//     rules: [
//     {
//       test: /\.ts$/,
//       exclude: /node_modules/,
//       use: 'ts-loader'
//     }
//   ]
//   },
//   resolve: {
//     extensions:[ '.ts' , '.js' ]
//   },
//   target: 'node',
//   mode: 'development',
//   devServer: {
//     static: {
//       directory: resolve( __dirname, '' )
//     }
//   }
// }

const { resolve } =  require( 'path' )

module.exports = {
  entry: './src/index.ts',
  output: {
    filename: 'index_compiled.js',
    path: resolve( __dirname, 'dist')
  },
  module: {
    rules: [
      {
       test: /\.ts/, 
       exclude: /node_modules/,
       use: 'ts-loader'
      }
    ]
  },
  resolve: {
    extensions: [ '.ts', '.js' ]
  },
  target: 'node',
  mode: 'production'
}