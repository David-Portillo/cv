const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
module.exports = {
  entry: ["regenerator-runtime/runtime.js", "./src/index.tsx"],
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
            options: { outputPath: "assets/images/" },
          },
        ],
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
