'use strict';

const path = require('path');
const razzleHeroku = require('razzle-heroku');

module.exports = {
  modify(config, { target, dev }, webpack) {
    // CHANGING ENTRY POINT FOR CLIENT
    config.entry.client = path.resolve(__dirname, './src/client/client.js')
    config = razzleHeroku(config, { target, dev }, webpack);
    return config;
  },
};