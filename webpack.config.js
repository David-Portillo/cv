const path = require("path");
const version = require("./package.json").version;
const HtmlWebpackPlugin = require("html-webpack-plugin");
const TerserWebpackPlugin = require("terser-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");

const isProd = process.env.NODE_ENV === "production";

const config = {
  mode: isProd ? "production" : "development",
  entry: ["regenerator-runtime/runtime.js", "./src/index.tsx"],
  output: {
    path: path.join(__dirname, "build"),
    filename: `bundle-${version}.js`,
    chunkFilename: `[name].chunk-${version}.js`,
  },

  resolve: {
    extensions: [".ts", ".tsx", ".js"],
  },

  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: "babel-loader",
      },
      {
        test: /\.(ts|tsx)$/,
        exclude: /node_modules/,
        use: ["babel-loader", "ts-loader"],
      },
      {
        test: /\.(jp?g|png|gif|ico)$/i,
        use: [
          {
            loader: "file-loader",
            options: { outputPath: "assets/" },
          },
        ],
      },
      {
        test: /\.(woff(2)?|ttf|eot)(\?v=\d+\.\d+\.\d+)?$/,
        use: ["url-loader", "file-loader"],
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: "url-loader",
            options: {
              sourceMap: true,
            },
          },
        ],
        include: [path.join(__dirname, "src"), /node_modules/],
      },
      {
        test: /\.(s(a|c)ss)$/,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
    ],
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

if (isProd) {
  config.optimization = {
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
  };
} else {
  config.devServer = {
    port: 3000,
    open: true,
    watchFiles: {
      paths: ["src/**"],
    },
    historyApiFallback: true,
  };
  config.devtool = "eval-source-map";
}

module.exports = config;
