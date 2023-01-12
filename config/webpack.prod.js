const path = require("path");
const version = require("../package.json").version;
const { merge } = require("webpack-merge");
const TerserWebpackPlugin = require("terser-webpack-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const commonConfig = require("./webpack.common");

const config = {
  mode: "production",
  output: {
    path: path.join(__dirname, "..", "build"),
    filename: `bundle-${version}.js`,
    chunkFilename: `[name].chunk-${version}.js`,
  },

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
