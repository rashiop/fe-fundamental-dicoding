const path = require( 'path' )
const CopyWebpackPlugin = require("copy-webpack-plugin");

const HtmlWebpackPlugin = require('html-webpack-plugin')
const ImageMinPlugin = require("imagemin-webpack-plugin").default;


const source_path = path.resolve(__dirname, '../src/');
const output_path = path.resolve( __dirname, '../dist/' );

module.exports = {
  entry: path.resolve( source_path, 'app.js'),
  output: {
    path: path.resolve(output_path),
    filename: 'bundle.js'
  },
  module: {
    rules: [{
      test: /.css$/,
      use: [
        { loader: 'style-loader' },
        { loader: 'css-loader' }
      ]
    }]
  },
  plugins: [
    new ImageMinPlugin({ test: /\.(jpg|jpeg|png|gif|svg)$/i }),
    new HtmlWebpackPlugin( {
      template: './src/template.html',
      filename: 'index.html'
    } ),
        new CopyWebpackPlugin({
      patterns: [
        {
          from: path.resolve(source_path, "images", "content"),
          to: path.resolve(output_path, "images", "content"),
          toType: "dir",
        },
        {
          from: path.resolve(source_path, "images", "design"),
          to: path.resolve(output_path, "images", "design"),
          toType: "dir"
        },
      ],
    }),
  ]
}