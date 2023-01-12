const path = require("path");
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
};
