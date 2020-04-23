'use strict';

const path = require('path');
const razzleHeroku = require('razzle-heroku');

module.exports = {
  modify(config, { target, dev }, webpack) {
    const appConfig = config;
    // CHANGING ENTRY POINT FOR CLIENT
    appConfig.entry.client = path.resolve(__dirname, './src/client/client.js')
    config = razzleHeroku(appConfig, { target, dev }, webpack);

    return config;
  },
};