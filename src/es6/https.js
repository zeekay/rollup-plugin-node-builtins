import {Agent, request as httpRequest, get, STATUS_CODES} from './http';
export {Agent, get, STATUS_CODES}
export function request (params, cb) {
  if (!params) params = {};
  params.scheme = 'https';
  params.protocol = 'https:';
  return httpRequest.call(this, params, cb);
}
