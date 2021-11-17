const http = require('http');
const fs = require('fs');

const homeRoute = fs.readFileSync('./index.html');
const aboutRoute = fs.readFileSync('./about-page.html');
const contactUsRoute = fs.readFileSync('./contact-us.html');
const errorRoute = fs.readFileSync('./error-page.html');

const server = http.createServer((request, response) => {
    console.log(request.url);
    response.statusCode = 200;
    response.setHeader('Content-type', 'text/html');

    if (request.url === '/') {
        response.end(homeRoute);   
} else if(request.url === '/about') {
        response.end(aboutRoute);
    } else if (request.url === '/contactus') {
        response.end(contactUsRoute);
    } else {
        response.statusCode = 404;
        response.end(errorRoute);
    }
});
server.listen(8080);
console.log("Server is running");