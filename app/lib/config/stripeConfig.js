/**
 * This file acts as a container for stripe.com configuration. 
*/

// Container
var stripe = {};

// Test configuration
stripe.test = {
    'key' : 'sk_test_fJAkKizBVVMsWwjCoNx244to'
};

// Production or live configuration
stripe.live = {
    'key' : ''
};

module.exports = stripe;