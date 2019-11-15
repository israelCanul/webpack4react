const baseConfig = require("./base.config.js");
const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const merge = require("webpack-merge");

module.exports = merge(baseConfig, {
    devServer: {
        hot: true,
        open: true,
        port: 9000
    },
    mode: 'development',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'js/[name].js'
    },
    module: {
        rules: [
          {
            test: /\.(js|jsx)$/,
            exclude: /node_modules/,
            loader: "babel-loader"
          },
          {
            test: /\.css$/,
            use: [
              'style-loader',
              'css-loader'
            ]
          }
        ]
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new HtmlWebpackPlugin({
          title: 'webpack-dev-server',
          template: path.resolve(__dirname, '../public/index.html')
        })
    ]
});