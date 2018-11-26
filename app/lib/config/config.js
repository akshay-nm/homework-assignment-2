/*
* This file contains configuration settings for the API 
*/

// Dependencies
var stripe = require('./stripeConfig');
var mailgun = require('./mailgunConfig');

// Container
var environments = {};

// Test environment (default)
environments.staging = {
    'httpPort' : 3000,
    'env' : 'staging',
    'httpsPort' : 3001,
    'stripe' : stripe.test,
    'mailgun' : mailgun.test
};

// Production environment
environments.production = {
    'httpPort' : 80,
    'env' : 'staging',
    'httpsPort' : 443,
    'stripe' : stripe.live,
    'mailgun' : mailgun.live
};

var currentEnvironmnet = typeof(process.env.NODE_ENV) == 'string' ? process.env.NODE_ENV.toLowerCase() : '';
var environmentToExport = typeof(environments[currentEnvironmnet]) == 'object' ? environments[currentEnvironmnet] : environments.staging;

// Exports
module.exports = environmentToExport;