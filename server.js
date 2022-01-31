const express = require('express');
const path = require('path');
const app = express();

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended:true}));

// public directory
app.use(express.static('public'));

// viewing
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs');

app.get('/login', (req, res) => {
  res.render('login');
});

app.post('/login', (req, res) => {
  let username = req.body.username;
  let password = req.body.password;

  if(username == 'user' && password === 'qwerty'){
    res.redirect('/dashboard');
  } 

  console.log('post request done');
});

app.get('/dashboard', (req, res) => {
  res.render('dashboard');
});

app.listen(3000, ()=> {
  console.log('Server started on http://localhost:8080');
});