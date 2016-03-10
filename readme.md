rollup-pulgin-node-builtins
===

allows the node builtins to be required/imported, doing so gives the browserify shim.  You almost certainly need to be using this in conjunction with [rollup-plugin-commonjs](https://github.com/rollup/rollup-plugin-commonjs), [rollup-plugin-node-resolve](https://github.com/rollup/rollup-plugin-node-resolve), [rollup-plugin-json](https://github.com/rollup/rollup-plugin-json) and [rollup-plugin-node-globals](https://github.com/calvinmetcalf/rollup-plugin-node-globals).  No config per-say, but you need to add `node_modules/rollup-plugin-node-globals/**` to the commonjs excludes and make sure you set browser to be true in nodeResolve.  Also it should come before nodeResolve and globals should come after commonjs

```js
import commonjs from 'rollup-plugin-commonjs';
import nodeResolve from 'rollup-plugin-node-resolve';
import globals from 'rollup-plugin-node-globals';
import builtins from 'rollup-plugin-node-builtins';
import json from 'rollup-plugin-json';
rollup({
  entry: 'main.js',
  plugins: [
    builtins(),
    nodeResolve({ jsnext: true, main: true, browser: true }),
    commonjs({
      exclude: ['node_modules/rollup-plugin-node-globals/**']
    }),
    globals(),
    json()
  ]
})
```

Some currently don't work (crypto) some do (events)
