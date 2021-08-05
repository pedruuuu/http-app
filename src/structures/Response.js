import Base from './Base.js';

class Response extends Base {
  constructor(app, response) {
    super(app);

    this.ended = false;

    Object.defineProperty(this, '_response', {
      value: response
    });
  }

  on(...args) {
    return super.on(...args);
  }

  emit(...args) {
    return super.emit(...args);
  }

  send(...args) {
    return this._response.write(...args);
  }

  end(...args) {
    this.ended = true;
    this.emit('end');

    return this._response.end(...args);
  }
}



export default Response;