var http = require('http');
var users = require('./users');
var url =require('url');

var server =http.createServer( (req,res)=>{
    const parsedUrl = url.parse(req.url, true);
    if (parsedUrl.pathname === "/user"&& req.method === "GET") {
        if(parsedUrl.query.name){
            const userData = users.findUser(parsedUrl.query.name);
            console.log(userData);
            res.end(JSON.stringify(userData))
        }
       else {
        const userData = users.getUser();
        res.writeHead(200, { "Content-Type": "application/json" });
        res.end(JSON.stringify(userData));
        }
    }
    else if(parsedUrl.pathname === "/" && req.method === "GET") {
            res.end('Home Page')
    }
    else {
        res.end('Not Found');
    }
})
server.listen(8080);
console.log("Server running");
