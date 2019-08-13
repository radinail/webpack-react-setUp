const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");
console.log("diiirrrr = ", __dirname);
module.exports = {
  entry: "./index.js",
  output: {
    path: path.join(__dirname, "/dist"),
    filename: "my-first-webpack.bundle.js"
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(__dirname, "/src/index.html")
    })
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "babel-loader",
        query: {
          presets: ["@babel/react"]
        }
      }
    ]
  },
  devServer: {
    contentBase: path.join(__dirname, "dist"),
    port: 3003
  },
  mode: "development"
};
