import Base from './Base.js';
import {
  parse
} from 'url';

class Request extends Base {
  constructor(app, request) {
    super(app);

    this.url = parse(request.url);
  }
}

export default Request;