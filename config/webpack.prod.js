const { merge } = require( 'webpack-merge' )
const common = require( './webpack.common' )

module.exports = merge( common, {
  mode: 'production',
  module: {
    rules: [
      {
        test: /\.js$/,
        use: {
            loader: 'babel-loader',
            options: {
              preset: ['@babel/preset-env']
            },
            exclude: '../node_modules'
          }
      }
    ]
  }
} )
