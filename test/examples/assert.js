import {ok} from 'assert';
var err;
try {
  ok(false, 'something');
} catch (e) {
  err = e;
}
if (err) {
  done();
} else {
  done(new Error('not right'));
}
