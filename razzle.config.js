'use strict';
const path = require('path');

module.exports = {
  modify(config) {
    require("razzle-heroku")
    const appConfig = config;
    // CHANGING ENTRY POINT FOR CLIENT
    appConfig.entry.client = path.resolve(__dirname, './src/client/client.js')
    return appConfig;
  },
};