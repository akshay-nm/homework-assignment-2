/**
 * Router for API
 * This module contains all the routes supported by this API 
*/

// Dependencies
var handlers = require('./handlers');

// Container
var router = {
    'ping' : handlers.ping,
    'sessions' : handlers.sessions,
    'users' : handlers.users,
    'menu' : handlers.menu,
    'orders' : handlers.orders
};

// Module exports
module.exports = router;