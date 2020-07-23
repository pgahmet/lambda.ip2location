// simulates lambda callback object

module.exports = function(err, result) {
    return console.log("-> CALLBACK:", err, result);
};
