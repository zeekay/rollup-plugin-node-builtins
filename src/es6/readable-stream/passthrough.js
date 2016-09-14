
import {Transform} from './transform';

import {inherits} from 'util';
inherits(PassThrough, Transform);
export function PassThrough(options) {
  if (!(this instanceof PassThrough)) return new PassThrough(options);

  Transform.call(this, options);
}

PassThrough.prototype._transform = function (chunk, encoding, cb) {
  cb(null, chunk);
};
