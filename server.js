if (process.env.NODE_ENV !== 'production'){
    require('dotenv').config()
}


const express = require('express')
const app = express()
const path = require('path');
const bcrypt = require('bcrypt')
const passport = require('passport')
const flash = require('express-flash')
const session = require('express-session')

const initializePassport = require('./passport-config')
initializePassport(passport, 
    email =>  users.find(user => user.email === email)
)
const users = []
app.set('views', path.join(__dirname, 'views'));
app.use(express.urlencoded({extended: false})) // This tells our application that we want to acces the forms from within the request variable in ost method
app.use(flash())
app.use(session({
    secret: process.env.SESSION_SECRET,
    resave:false,
    saveUninitialized:false
}))
app.use(passport.initialize())
app.use(passport.session())
app.set('view-engine', 'ejs')

app.get('/', (req, res) =>{
    res.render('index.ejs', {name: 'Kyle'})
})

app.get('/login', (req, res) =>{
    res.render('login.ejs')
})
app.get('/signup', (req, res) => {
    res.render('signup.ejs');
  });

app.post('/login', passport.authenticate('local', {
    successRedirect: '/',
    failureRedirect: '/login',
    failureFlash: true
}))
app.post('/signup', async (req, res) =>{
    try{
        const hashedPassword = await bcrypt.hash(req.body.password, 10)
        users.push({
            id: Date.now().toString(),
            username:req.body.username,
            email: req.body.email,
            password: hashedPassword
        })
        res.redirect('/login')
    }catch{
        res.redirect('/signup')
    }
    console.log(users)
})
app.listen(3000)