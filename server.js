const express = require('express')
const app = express()
const path = require('path');

app.set('views', path.join(__dirname, 'views'));
app.set('view-engine', 'ejs')

app.get('/', (req, res) =>{
    res.render('index.ejs', {name: 'Kyle'})
})

app.get('/login', (req, res) =>{
    res.render('login.ejs')
})

app.get('/register', (req, res) =>{
    res.render('register.ejs')
})
app.listen(3000)