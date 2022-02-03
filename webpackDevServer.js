const Webpack = require("webpack");
const WebpackDevServer = require("webpack-dev-server");
const colors = require("colors");

const config = require("./webpack.config.dev");

const FRONTEND_PORT = 8080;

const compiler = Webpack(config);
const devServerOptions = {
  static: ["assets"],
  port: FRONTEND_PORT,
  open: true,
  hot: true,
  historyApiFallback: true,
};
const server = new WebpackDevServer(devServerOptions, compiler);

const runServer = async () => {
  console.log("====================================".magenta);
  console.log("         WEBPACK DEV SERVER         ");
  console.log("====================================".magenta);
  console.log("Configuration:", "webpack.config.dev.js".magenta);
  console.log("Listening at", `http://localhost:${FRONTEND_PORT}`.magenta);
  console.log("====================================".magenta);

  await server.start();
};

runServer();
