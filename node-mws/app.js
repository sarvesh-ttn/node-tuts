// const fs = require('fs');
const express = require('express');
const PORT = 8080;

const app = express();

// checks if the incoming request is JSON object.
app.use(express.json());

const loggerMiddleware = (req, res, next) => {
    if (req.body.name === "Sarvesh Bhatt" && req.body.password === "bhatt123") {
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
        message: "Hi there !"
    });
    res.send();
});

app.post("/", loggerMiddleware, (req, res) => {
    res.send(`You are Logged In!! ${req.body.name}`);
});


app.listen(PORT, () => {
    console.log(`Server is running on PORT ${PORT}...`);
});