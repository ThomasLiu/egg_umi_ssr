'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  router.get('/redux(/.+)?', controller.spa.redux);
  router.get('/client(/.+)?', controller.spa.client);
  router.get('/ssr(/.+)?', controller.spa.ssr);

};
