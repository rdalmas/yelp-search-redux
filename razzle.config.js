'use strict';
const path = require('path');

module.exports = {
  modify: require("razzle-heroku"),
  modify(config) {
    const appConfig = config;
    // CHANGING ENTRY POINT FOR CLIENT
    appConfig.entry.client = path.resolve(__dirname, './src/client/client.js')
    return appConfig;
  },
};