A)List of dependencies 
*Node must be installed in system.
Express , Express-session , Axios , Cookie-parser

B) cd to node-mws
  
     *Qstn 1*
i)run node app.js in terminal and it'll start the server at 3000 
ii) app.js contains the server side logic and inside views folder we have our index.html to be rendered.

     *Qstn 2*
i) run buffer-file.js for buffer part & run stream-file.js for stream part 

     *Qstn 3*
i) run async-await.js and it'll start the server at port 8000 
ii) on entering users/<username> it'll give the user data of that user.

    *Qstn 4*
i) 

const fs = require('fs');
const express = require('express');
const PORT = 8080;

const app = express();

// checks if the incoming request is JSON object.
app.use(express.json());

const loggerMiddleware = (req, res, next) => {
    if (req.body.name === "Vikash Pareek" && req.body.id === 1) {
        next();
    } else {
        res.json({
            status: 400,
            error: "User does not exist here!"
        });
    }
}

app.get("/", (req, res) => {
    res.json({
        message: "He
ello from Vikash!"
    });
    res.send();
});

app.post("/", loggerMiddleware, (req, res) => {
    res.send("You are Logged In!!");
});


app.listen(PORT, () => {
    console.log(`Server is running on PORT ${PORT}...`);
});