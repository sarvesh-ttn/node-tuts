const express       = require('express');
const app           = express();
const session       = require('express-session');
const passport      = require('passport')
const flash         = require('connect-flash');
const authRouter    = require('./router/auth')

const PORT = 5000;

require('./boot/auth')()
// templating engine
app.set('view-engine','ejs')

// middleware
app.use(flash())
app.use(express.urlencoded({extended:false}))
app.use(express.json())
app.use(session({
    secret:"mysecretkey",
    resave:false,
    saveUninitialized:true
}))
app.use(passport.initialize());
app.use(passport.session());
app.use('/',authRouter)

// database connection


// passport.js



app.listen(PORT,()=>{
    console.log(`Server started at PORT ${PORT}`);
})