"use strict";

import EventEmitter from 'eventemitter3';

class Base extends EventEmitter {
  constructor(app) {
    super();

    Object.defineProperty(this, 'app', {
      value: app
    });
  }
}

export default Base;