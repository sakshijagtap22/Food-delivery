const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const routes = require('./routes/index');
const path = require('path');
const session = require('express-session');
require('dotenv').config(); 
const flash = require('connect-flash');


const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(bodyParser.json());

app.use(session({
    secret: process.env.SECRET,  // Replace with a strong secret key
    resave: false,
    saveUninitialized: false,
    cookie: { secure: false }  // Set `secure: true` if using HTTPS
}));

// Set up flash middleware
app.use(flash());

// Set a global variable for flash messages (so they're accessible in all views)
app.use((req, res, next) => {
    res.locals.success_msg = req.flash('success');
    res.locals.error_msg = req.flash('error');
    res.locals.error = req.flash('error');  // For passport.js (if used)
    next();
});

app.use(express.static(path.join(__dirname, 'public')));
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views')); // Set the views directory
app.use(express.urlencoded({ extended: true })); // To parse form data
// Middleware, static files, etc. can be set here

// Use the routes from the `routes/index.js` file
app.use('/api', routes);

app.use('/', routes);

// MongoDB connection
mongoose.connect('mongodb://localhost:27017/food_delivery_db', { })
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.log(err));


// Start server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
