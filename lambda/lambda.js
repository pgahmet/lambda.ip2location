var lambda = require('../src/index.js');
var context = require('./context.js');
var event = require('./event.js');
var callback = require('./callback.js');

var thisEvent = new event();
var thisContext = new context();

// event ohject is passed to lambda function
console.log('-> EVENT:',JSON.stringify(thisEvent, null, 4));

lambda.handler(thisEvent, thisContext, callback);

