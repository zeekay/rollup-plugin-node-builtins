import EE from 'events';

var e = new EE();
e.on('it', function (foo) {
  console.log('it', foo);
});
e.emit('it', 'works');
