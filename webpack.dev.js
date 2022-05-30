const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const plugins = [
  new HtmlWebpackPlugin({
    template: './src/index-template.html',
  }),
  new webpack.DefinePlugin({
    ROUTER_BASE_PATH: JSON.stringify(undefined),
  }),
];

const config = {
  mode: 'development',
  plugins,
  module: {
    rules: [
      {
        test: /\.jsx$/,
        exclude: /(node_modules)/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.scss$/,
        use: [
          {
            loader: 'style-loader',
          },
          {
            loader: 'css-loader',
          },
          {
            loader: 'sass-loader',
            options: {
              // Prefer `dart-sass`
              implementation: require('sass'),
            },
          },
        ],
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx', '.json'],
  },
  optimization: {
    moduleIds: 'named',
  },
  devtool: 'inline-source-map',
  devServer: {
    port: 9000,
    hot: true,
    open: true,
  },
};

module.exports = config;
