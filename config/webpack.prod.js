const path = require("path");
const version = require("../package.json").version;
const { merge } = require("webpack-merge");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const TerserWebpackPlugin = require("terser-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const commonConfig = require("./webpack.common");

const config = {
  mode: "production",
  output: {
    path: path.join(__dirname, "..", "build"),
    filename: `bundle-${version}.js`,
    chunkFilename: `[name].chunk-${version}.js`,
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
  optimization: {
    minimize: true,
    minimizer: [
      new TerserWebpackPlugin({
        parallel: true,
        extractComments: "all",
        terserOptions: {
          compress: true,
        },
      }),
      new CssMinimizerPlugin(),
    ],
  },
};

module.exports = merge(commonConfig, config);
