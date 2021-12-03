const express   = require('express');
const bcrypt    = require('bcryptjs');
const passport  = require('passport')
const mongoose  = require('mongoose')


const User = require('../model/User');


const router = express.Router();

mongoose.connect('mongodb://localhost:27017/userdb',{
    useNewUrlParser:true
})
const db =  mongoose.connection;


router.get('/',(req,res)=>{
    res.render('form.ejs',{name:"Sarvesh"})
    })
    
    router.get('/login',(req,res)=>{
        res.render('login.ejs')
    })

    router.post('/',async (req,res)=>{
        const name =req.body.name;
        let myPassword = req.body.password;
        const email = req.body.email;
        try{
            console.log(name,myPassword,email);
              bcrypt.genSalt(10, function(err, salt) {
                bcrypt.hash(myPassword, salt, function(err, hash) {
                    // Store hash in your password DB.
                    myPassword=hash;
                    const data = {name,myPassword,email}  
                    db.collection('users').insertOne(data,(err,connection)=>{
                        console.log(data);
                        if(err){
                            throw err
                        }
                        console.log("successfully inserted the record");
                    })
                    return res.render('login.ejs',{username:name})
                });
               
        });
       
        }
        catch{
            res.render('error.ejs')
        }
    })

    router.get('/welcome',(req,res)=>{
        res.render('welcome.ejs',{username:req.user.name})
    })

    router.post('/login',passport.authenticate('local',{
        successRedirect:'/welcome',
        failureRedirect: '/login?error=true',
        // failureFlash: true 
    }),(req,res)=>{
        try{
    
            console.log(req.body);
        }
        catch(err){
            console.log(err);
        }
    })
router.get('/auth/facebook',
  passport.authenticate('facebook', { authType: 'reauthenticate', scope: ['user_friends', 'public_profile','email'] }));

  router.get('/auth/facebook/callback',
  passport.authenticate('facebook', { failureRedirect: '/login' }),
  function(req, res) {
    // Successful authentication, redirect home.
    res.redirect('/welcome');
  });
router.get('/logout',(req,res,next)=>{
    res.redirect('/login')
})
module.exports = router;