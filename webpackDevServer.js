const Webpack = require('webpack');
const WebpackDevServer = require('webpack-dev-server');
const colors = require('colors');

const config = require('./webpack.config.dev');

const FRONTEND_PORT = 8080;
const BACKEND_PORT = 8000;

const compiler = Webpack(config);
const devServerOptions = {
  static: ['assets'],
  port: FRONTEND_PORT,
  open: true,
  hot: true,
  historyApiFallback: true,
  proxy: {
    '/api/**': `http://localhost:${BACKEND_PORT}`,
  },
  headers: {
    'Access-Control-Allow-Origin': `http://localhost:${BACKEND_PORT}`,
  },
};
const server = new WebpackDevServer(devServerOptions, compiler);

const runServer = async () => {
  console.log('===================================='.magenta);
  console.log('         WEBPACK DEV SERVER         ');
  console.log('===================================='.magenta);
  console.log('Configuration:', 'webpack.config.dev.js'.magenta);
  console.log('Listening at', `http://localhost:${FRONTEND_PORT}`.magenta);
  console.log('===================================='.magenta);

  await server.start();
};

runServer();
