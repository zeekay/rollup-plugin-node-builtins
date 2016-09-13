
var rollup = require( 'rollup' );
var builtins = require('..');
var files = [
  'events.js',
  'url.js'
];
describe( 'rollup-plugin-node-builtins', function () {
  files.forEach(function (file) {
	it( 'works with ' + file, function (done) {
		rollup.rollup({
			entry: 'test/examples/' + file,
			plugins: [
        builtins()
			]
		}).then( function ( bundle ) {
			var generated = bundle.generate();
			var code = generated.code;
		  var fun = new Function('done', code);
      fun(done);
		}).catch(done);
	});
})
});
