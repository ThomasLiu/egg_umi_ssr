/* eslint valid-jsdoc: "off" */

'use strict';
const path = require('path');
const fs = require('fs');
/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
module.exports = appInfo => {
  /**
   * built-in config
   * @type {Egg.EggAppConfig}
   **/
  const config = {};

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1552886583942_9539';

  // add your middleware config here
  config.middleware = [];

  // add your user config here
  const userConfig = {
    // myAppName: 'egg',
  };

  config.siteFile = {
    '/favicon.ico': fs.readFileSync(path.join(appInfo.baseDir, 'app/web/asset/images/favicon.ico')),
  };

  config.logger = {
    consoleLevel: 'DEBUG',
    dir: path.join(appInfo.baseDir, 'logs'),
  };

  config.static = {
    prefix: '/public/',
    dir: path.join(appInfo.baseDir, 'public'),
  };

  config.middleware = [
    'access',
  ];

  return {
    ...config,
    ...userConfig,
  };
};
