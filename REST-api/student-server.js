var http=require('http');
var url =require('url')
var students = require('./student-list');
var server =http.createServer((req,res)=>{

    const parsedUrl = url.parse(req.url, true);

    if (parsedUrl.pathname === "/students"&& req.method === "GET"){
        
        if(parsedUrl.query.branch){
            const filteredStudent = students.getBranchStudents(parsedUrl.query.branch);
            console.log(filteredStudent);
            res.end(JSON.stringify(filteredStudent));
        }
        else{
            const studentData = students.getAllStudents();
            console.log('result');
        res.end(JSON.stringify(studentData));
        }
    }
    else if (req.url==='/') {
        res.write('Home Page');
        res.end();
    }
    else {
        res.write('Not Found');
        res.end();
    }


})
server.listen(8080);
console.log('server is listening');