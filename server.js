if (process.env.NODE_ENV !== 'production') {
    require('dotenv').config()
}

// Imports
const express = require('express');
const app = express();
const bcrypt = require('bcrypt');
const passport = require('passport');
const flash = require('express-flash');
const session = require('express-session');
const port = 3000;

const initializePassport = require('./passport-config');
initializePassport(
    passport,
    email => users.find(user => user.email === email),
    id => users.find(user => user.id === id)
    );

const users = []; // as a step 0 before storing the data in MongoDB

// Static files
app.use(express.static('public'));
app.use('/css', express.static(__dirname + 'public/css'));
app.use('/js', express.static(__dirname + 'public/js'));

// Set Templating Engine
app.set('view-engine', 'ejs');
// to get access of the input fields' value inside the request variable
app.use(express.urlencoded({ extended: false })); 
// Flash
app.use(flash())
app.use(session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false
}))
app.use(passport.initialize());
app.use(passport.session());
// Navigation
app.get('/', (req, res) => {
    res.render('index.ejs')
})

app.get('/login', (req, res) => {
    res.render('login.ejs');
})

app.post('/login', passport.authenticate('local', {
    successRedirect: '/',
    failureRedirect: '/login',
    failureFlash: true
}))

app.post('/register', async (req, res) => {
    try {
        const hashedPassword = await bcrypt.hash(req.body.password, 10);
        users.push({
            id: Date.now().toString(),
            name: req.body.name,
            email: req.body.email,
            password: hashedPassword
        })
        res.redirect('/');
    } catch (error) {
        res.redirect('/register')
    }
    console.log(users)
})

// Listen on port 3000
app.listen(port, () => console.info(`App listening on port ${port}`));