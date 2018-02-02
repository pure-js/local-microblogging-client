const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  // For webpack 4
  // mode: 'production',
  entry: './src/index.jsx',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].[chunkhash].min.js',
  },
  module: {
    rules: [
      {
        test: /\.jsx$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.scss/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [
            {
              loader: 'css-loader',
              options: {
                minimize: true,
                modules: true,
              },
            },
            {
              loader: 'sass-loader',
            },
          ],
        }),
        // use: [{
        //   loader: 'style-loader',
        // }, {
        //   loader: 'css-loader',
        // }, {
        //   loader: 'sass-loader',
        // }],
      },
    ],
  },
  plugins: [
    new CleanWebpackPlugin(['dist']),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('production'),
    }),
    new HtmlWebpackPlugin({
      template: 'index-template.html',
      minify: {
        removeComments: true,
        collapseWhitespace: true,
        removeScriptTypeAttributes: true,
      },
    }),
    new ExtractTextPlugin('[name].[chunkhash].min.css'),
  ],
};
