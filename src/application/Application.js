"use strict";

import EventEmitter from 'eventemitter3';

import Collection from '../util/Collection.js';
import Request from '../structures/Request.js';
import Response from '../structures/Response.js';

import {
  createServer
} from 'http';

class Application extends EventEmitter {
  constructor() {
    super();
    this._routes = new Collection();

  }

  listen(port = process.env.PORT) {
    return new Promise((resolve, reject) => {
      try {
        this.emit('ready');
        this._server = createServer(this._HttpServerCallback);
        this._server.app = this;

        this._server.listen(port, resolve);

      } catch(error) {
        this.emit('error', error);
        reject(error);
      }
    });
  }

  get(...args) {
    return this._routes.set(...args);
  }

  on(...args) {
    return super.on(...args);
  }

  emit(...args) {
    return super.emit(...args);
  }

  async _HttpServerCallback(request, response) {
    this.app.emit('request', request, response);

    const req = new Request(this.app, request);
    const res = new Response(this.app, response);

    const {
      url: {
        pathname
      }
    } = req;


    let route = this.app._routes.has(pathname) ? this.app._routes.get(pathname): undefined;

    res._response.writeHead(200, {
      'Content-type': 'text/html'
    });

    route ? route.call(this.app, req, res): undefined;

    return res.ended ? undefined: res.end();
  }
}

Application.prototype._server = null;

export default Application;