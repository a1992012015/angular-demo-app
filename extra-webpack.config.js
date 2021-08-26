const webpack = require('webpack');
const pkg = require('./package.json');
const path = require('path');
// const CopyPlugin = require('copy-webpack-plugin');
// const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

module.exports = (config, options) => {
  // config.entry = {
  //   index: './src/index.js',
  //     demo1: './src/components/demo1.js',
  //     demo2: './src/components/demo2.js'
  // };
  //   config.output = {
  //   path: path.resolve(__dirname, '../dist'),
  //     filename: '[name]/index.js',
  //     libraryTarget: 'commonjs2'
  // }
  //
  // config.plugins.push(
  //   new webpack.DefinePlugin({
  //     'APP_VERSION': JSON.stringify(pkg.version),
  //   }),
  //   new BundleAnalyzerPlugin(),
  //   new CopyPlugin([
  //     { from: path.join(__dirname, "moackdata"), to: path.join(__dirname, "dist/angular-performance/moackdata") }
  //   ])
  // );

  return config;
};
