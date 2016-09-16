var vm = require('vm');
var rollup = require('rollup');
var builtins = require('..');
var globals = require('rollup-plugin-node-globals');
var constants = require('constants');
var files = [
  'events.js',
  'url-parse.js',
  'url-format.js',
  'stream.js',
  'assert.js',
  'constants.js'
];
describe('rollup-plugin-node-builtins', function() {
  files.forEach(function(file) {
    it('works with ' + file, function(done) {
      var config = {
        entry: 'test/examples/' + file,
        plugins: [
          builtins()
        ]
      };
      if (file === 'stream.js' || file === 'assert.js') {
        config.plugins.push(globals());
      }
      rollup.rollup(config).then(function(bundle) {
        var generated = bundle.generate();
        var code = generated.code;
        var script = new vm.Script(code);
        var context = vm.createContext({
          done: done,
          setTimeout: setTimeout,
          clearTimeout: clearTimeout,
          console: console,
          _constants: constants
        });
        context.self = context;
        script.runInContext(context);
      }).catch(done);
    });
  })
});
