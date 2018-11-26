/**
 * This file acts as a container for stripe.com configuration. 
*/

// Container
var mailgun = {};

// Test configuration
mailgun.test = {
    'username' : 'api', 
    'key' : 'key-4a4d2c18cf5dd628840f937fb21020b6-1053eade-348f8016'
};

// Production or live configuration
mailgun.live = {
    'username' : 'api',
    'key' : ''
};

module.exports = mailgun;