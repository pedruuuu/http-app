"use strict";

class Base {
  constructor(app) {
    Object.defineProperty(this, 'app', {
      value: app
    });
  }
}

export default Base;