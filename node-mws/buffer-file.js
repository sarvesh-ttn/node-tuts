const str = 'Sarvesh';
const buf = Buffer.from(str);
console.log('String data :', str);
console.log('String Length :', str.length);
console.log('Buffer data :', buf);
console.log('Buffer Length :', buf.length);

var count =buf.write('A',3)
console.log(buf.toString(),count);