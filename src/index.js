import _libs from 'node-libs-browser';
const libs = new Map();
for (let key of Object.keys(_libs)) {
  libs.set(key, _libs[key]);
}
function resolveId(importee) {
  if (libs.has(importee)) {
    return libs.get(importee);
  }
}
export default function () {
  return {resolveId};
}
