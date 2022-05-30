const webpack = require('webpack'); 
const { merge } = require('webpack-merge');

const prod = require('./webpack.prod.js');

module.exports = merge(prod, {
  plugins: [
    new webpack.DefinePlugin({
      ROUTER_BASE_PATH: JSON.stringify(undefined),
    })
  ]
});
