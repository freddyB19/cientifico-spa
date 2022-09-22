const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebPackPlugin = require('copy-webpack-plugin');
 // Donde estara todo nustro codigo princial.
// Donde estara nuestr codigo compilado y listo para produccion
// Donde esara el cod compilado.
module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: "main.js"
  },
  resolve: {
    extensions: [".js"],
  },
  module: {
    rules: [{
      test: /\.js?$/,
      exclude: /node_modules/,
      use: {
        loader: 'babel-loader',
      }
    }]
  },
  plugins: [
    new HtmlWebpackPlugin(
      {
        inject: true,
        template: './public/index.html',
        filename: './index.html',
      }
    ),
    new CopyWebPackPlugin({
      patterns: [
        {from: "./src/styles/styles.css", to:''}
      ]
    })
  ]
}
