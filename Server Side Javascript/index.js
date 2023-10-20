// Our wep appp
// A web application to provide a gameshop

// Import the modules we need
var express = require ('express')
var ejs = require('ejs')
var bodyParser= require ('body-parser')
const path = require('path');
const mysql = require('mysql');



// Define the database connection
// const db = mysql.createConnection ({
//     host: 'localhost',
//     user: 'gameapp',
//     password: 'qwerty',
//     database: 'gameDatabase'
// });


// // Connect to the database
// db.connect((err) => {
//     if (err) {
//         throw err;
//     }
//     console.log('Connected to database');
// });
// global.db = db;



// Create the express application object
const app = express()
const port = 8000

//Use bodyParser in express
app.use(bodyParser.urlencoded({ extended: true }))

// Set the directory where static files (css, js, etc) will be

app.use(express.static(path.join(__dirname, '..', 'Css')));

app.use(express.static(path.join(__dirname, '..', 'Client Side Javascript')));

app.use(express.static(path.join(__dirname, '..', 'Images')));

// Tell Express that we want to use EJS as the templating engine
app.set('view engine', 'ejs');


// We want to use EJS's rendering engine

app.engine('html', ejs.renderFile);

// Tells Express how we should process html files

app.set('views', path.join(__dirname, '..', 'Html'));


//Requires all the modules for the different pages
require('./login')(app);




// Start the web app listening
app.listen(port, () => console.log(`Example app listening on port ${port}!`))

