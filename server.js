// load env variables
require('dotenv').config();

// dependencies
const express = require('express'),
  app            = express(),
  port           = process.env.PORT || 3000,
  expressLayouts = require('express-ejs-layouts')
  mongoose       = require('mongoose'),
  bodyParser = require('body-parser'),
  session = require('express-session'),
  cookieParser = require('cookie-parser'),
  flash = require('connect-flash'), 
  expressValidator = require('express-validator');

//configure application

// set sessions and cookie parser
app.use(session({
  secret: process.env.SECRET,
  cookie: { maxAge: 60000 },
  resave: false, // forces the session to be saved back to the store
  saveUninitialized: false // dont save unmodified
}));
app.use(flash());

// tell express where to look for static assets
app.use(express.static(__dirname + '/public'));

// set view engine
app.set('view engine', 'ejs');
app.use(expressLayouts);

// Connect to DB
mongoose.connect(process.env.DB_URI);

// use body parser to grab info from form
app.use(bodyParser.urlencoded({ extended: true }));
app.use(expressValidator());

//set routes
app.use(require('./app/routes'));

// start server
app.listen(port, () => {
  console.log(`App listening on http://localhost:${port}`);
});