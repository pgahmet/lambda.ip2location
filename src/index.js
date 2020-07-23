// var async = require('async');
var ip2loc = require("ip2location-nodejs");

ip2loc.IP2Location_init("./src/DB1.BIN");

exports.handler = async function(event, context, callback) {

    // response object
    const response = (body = { status: "error", message: "Missing parameters!" }, statusCode = 400) => { 
        return {
            statusCode: statusCode,
            body: JSON.stringify(body),
            headers: {
                'Content-Type': 'application/json',
            }
        };
    };

    // get ip from query
    const { ip } = event.queryStringParameters;


    if (event.httpMethod === 'GET' && ip) {
        const body = {
            ip: ip,
            countryCode: ip2loc.IP2Location_get_country_short(ip),
            country: ip2loc.IP2Location_get_country_long(ip)
        };
        callback(null, response(body, 200));
    } else {
        callback(null, response());
    }

};
