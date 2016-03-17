
var rollup = require( 'rollup' );
var commonjs = require('rollup-plugin-commonjs');
var nodeResolve = require('rollup-plugin-node-resolve');
var globals = require('rollup-plugin-node-globals');
var builtins = require('..');
var json = require('rollup-plugin-json');
var fs = require('fs');
var files = [
  'events.js'
];
describe( 'rollup-plugin-node-builtins', function () {
  files.forEach(function (file) {
	it( 'works with ' + file, function () {
		return rollup.rollup({
			entry: 'test/examples/' + file,
			plugins: [
        globals(),
        builtins(),
        nodeResolve({ jsnext: true, main: true, browser: true }),
        commonjs({
          ignoreGlobal: true
        }),
        json()
			]
		}).then( function ( bundle ) {
			var generated = bundle.generate();
			var code = generated.code;
		  eval(code);
		});
	});
})
});
