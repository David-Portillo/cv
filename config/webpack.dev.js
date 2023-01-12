const { merge } = require("webpack-merge");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const commonConfig = require("./webpack.common");

const devConfig = {
  mode: "development",
  devServer: {
    port: 3000,
    open: true,
    watchFiles: {
      paths: ["src/**"],
    },
    historyApiFallback: true,
  },
  plugins: [
    new HtmlWebpackPlugin({
      // favicon: "./src/assets/favicon.png",
      hash: true,
      title: "Portfolio",
      template: "./public/index.html",
    }),
    new MiniCssExtractPlugin(),
  ],
};

module.exports = merge(commonConfig, devConfig);
