import Base from './Base.js';

class Response extends Base {
  constructor(app, response) {
    super(app);

    Object.defineProperty(this, '_response', {
      value: response
    });
  }

  send(...args) {
    return this._response.send(...args);
  }

  end(...args) {
    return this._response.end(...args);
  }
}



export default Response;