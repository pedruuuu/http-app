import Base from './Base';
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