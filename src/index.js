import _libs from 'node-libs-browser';
import {join} from 'path';
const libs = new Map();
Object.keys(_libs).forEach(key=>libs.set(key, _libs[key]));

// our es6 versions
libs.set('process', require.resolve('process-es6'));
libs.set('buffer', require.resolve('buffer-es6'));
libs.set('util', require.resolve(join('..', 'src', 'es6', 'util')));
libs.set('sys', libs.get('util'));
libs.set('events', require.resolve(join('..', 'src', 'es6', 'events')));
libs.set('stream', require.resolve(join('..', 'src', 'es6', 'stream')));
libs.set('path', require.resolve(join('..', 'src', 'es6', 'path')));
libs.set('querystring', require.resolve(join('..', 'src', 'es6', 'qs')));
libs.set('punycode', require.resolve(join('..', 'src', 'es6', 'punycode')));
libs.set('url', require.resolve(join('..', 'src', 'es6', 'url')));
libs.set('string_decoder', require.resolve(join('..', 'src', 'es6', 'string-decoder')));
libs.set('http', require.resolve(join('..', 'src', 'es6', 'http')));
libs.set('https', require.resolve(join('..', 'src', 'es6', 'http')));
libs.set('os', require.resolve(join('..', 'src', 'es6', 'os')));
libs.set('assert', require.resolve(join('..', 'src', 'es6', 'assert')));
libs.set('constants', require.resolve(join('..', 'dist', 'constants')));
function resolveId(importee) {
  if (importee && importee.slice(-1) === '/') {
    importee === importee.slice(0, -1);
  }
  if (libs.has(importee)) {
    return libs.get(importee);
  }
}
export default function () {
  return {resolveId};
}
