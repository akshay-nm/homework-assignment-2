/**
 * Router for API
 * This module contains all the routes supported by this API 
*/

// Dependencies
var handlers = require('./handlers');

// Container
var router = {
    'ping' : handlers.ping,
    'users/login' : handlers.login,
    'users/logout' : handlers.logout,
    'users' : handlers.users,
    'menu' : handlers.menu,
    'cart' : handlers.cart,
    'orders' : handlers.orders
};

// Module exports
module.exports = router;