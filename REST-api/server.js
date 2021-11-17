var http = require('http');
var users = require('./users');

var server =http.createServer( (req,res)=>{
    if (req.url === "/users" && req.method === "GET") {
    
        const userData = users.getUser();
        res.writeHead(200, { "Content-Type": "application/json" });
        res.end(JSON.stringify(userData));
    }
})
server.listen(8080);
console.log("Server running");
