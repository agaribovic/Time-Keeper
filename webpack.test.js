const path = require("path");
const nodeExternals = require("webpack-node-externals");
module.exports = {
  mode: "development",
  entry: ['babel-polyfill',path.join(__dirname, "./test/index.js")],
  output: {
    path: path.join(__dirname, "./dist/"),
    filename: "test.js"
  },
  externals: [nodeExternals()],
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: ["babel-loader"]
      }
    ]
  }
};