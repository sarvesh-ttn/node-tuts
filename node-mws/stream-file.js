var fs = require('fs');
var writerStream = fs.createWriteStream('output.txt');
var readStream = fs.createReadStream('./test.txt')
readStream.on('data', chunk => {
    console.log('---------------------------------');
    console.log(chunk);
    console.log('---------------------------------');
  });
  
  readStream.on('open', () => {
    console.log('Stream opened...');
  });
  // following method reads data from test file ond adds it to output file
  readStream.pipe(writerStream)