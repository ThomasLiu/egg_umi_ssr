'use strict';

const Controller = require('egg').Controller;

class SPAController extends Controller {
  async client() {
    const { ctx } = this;
    await ctx.renderClient('client.js', {});
  }

  async redux() {
    const { ctx } = this;
    await ctx.renderClient('redux.js', {});
  }

  async ssr() {
    const { ctx } = this;
    await ctx.render('ssr.js', { url: ctx.url });
  }
}


module.exports = SPAController;
