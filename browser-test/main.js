import {get} from 'http';


get('foo.json', function (res) {
  console.log('status', res.statusCode);
  var data = '';
  res.on('data', function (d) {
    data += d.toString();
  }).on('error', function (e) {
    console.log('error', e);
  }).on('end', function () {
    console.log(data);
  });
})
