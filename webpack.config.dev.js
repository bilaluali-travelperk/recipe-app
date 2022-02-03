const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "development",

  entry: [
    "webpack-dev-server/client?http://localhost:8080",
    "webpack/hot/dev-server",
    "./src/index.tsx",
  ],

  output: {
    path: path.join(__dirname, "/assets/dist/"),
    filename: "bundle.js",
    pathinfo: true,
  },

  resolve: {
    modules: [__dirname, "node_modules"],
    alias: {
      "~recipe": path.join(__dirname, "src", "modules"),
    },
    extensions: [".tsx", ".ts", ".js", ".css"],
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(__dirname, "src", "index.html"),
    }),
  ],

  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ["babel-loader"],
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(svg)(\?[a-z0-9]+)?$/,
        use: ["file-loader?name=[path][name].[ext]"],
      },
    ],
  },
};
