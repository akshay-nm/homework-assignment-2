/*
* This file contains bootstrapping logic for the API 
*/

// Dependencies
var server = require('./lib/server');

// Container
var app = {};

// Initialization
app.init = function() {
    // Start the server
    server.init();
    // Start the background workers

}

app.init();