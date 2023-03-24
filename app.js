const express = require("express");
const exphbs = require("express-handlebars");
const bodyParser = require("body-parser");
const mysql = require("mysql")

require("dotenv").config()

const app = express();

const port = process.env.PORT || 4500;

//Parsing middleware 

//Parse application/x-www-form-urlencode
app.use(express.urlencoded({extended: true}));

//Parse application/json
app.use(express.json());

// Static files
app.use(express.static('public'));

// Templating Engine
const handlebars = exphbs.create({ extname: '.hbs',});
app.engine('.hbs', handlebars.engine);
app.set('view engine', '.hbs');



// Navigation
const routes = require('./server/routes/user');
app.use('/', routes);



app.listen(port, () => console.log(`Listening on port ${port}`));

