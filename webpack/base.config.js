const webpack = require("webpack");
const path = require("path");
module.exports = {
  entry: {
    index: path.resolve(__dirname,'../src/index.js'),
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: "babel-loader"
      }
    ]
  },
  plugins: []
};
