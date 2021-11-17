        // Code eg of sync and async file reading
// async file reading
const fs = require('fs');
fs.readFile('../../sample.txt','utf-8',function (err,resp){
    if(!err) console.log(resp);
})
console.log('async file reading in progress');

// sync file reading

const fs =require('fs');
const content =fs.readFileSync('../../sample.txt','utf-8');
console.log(content);
console.log('sync file reading in progress');