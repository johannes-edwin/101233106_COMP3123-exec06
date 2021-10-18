const mongoose = require('mongoose');

//TODO - Create Note Schema here having fields
//      - noteTitle
//      - noteDescription
//      - priority (Value can be HIGH, LOW or MEDUIM)
//      - dateAdded
//      - dateUpdated

//***server.js***

const express = require('express');

const bodyParser = require('body-parser');

const mongoose = require('mongoose');

const DB_URL = ""

const app = express();

app.use(bodyParser.urlencoded({ extended: true }))

app.use(bodyParser.json())

mongoose.Promise = global.Promise;

// TODO - Update your mongoDB Atals Url here to Connect to the database

mongoose.connect(DB_URL, {

useNewUrlParser: true,

useUnifiedTopology: true

}).then(() => {

console.log("Successfully connected to the database mongoDB Atlas Server");

}).catch(err => {

console.log('Could not connect to the database. Exiting now...', err);

process.exit();

});

app.get('/', (req, res) => {

res.send('Welcome to Note taking application');

});

app.listen(8081, () => {

console.log("Server is listening on port 8089");

});