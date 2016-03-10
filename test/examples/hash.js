import {createHash} from 'crypto';

console.log(createHash('sha224').update('hello').digest('hex'));
