var mongoose = require('mongoose');
var fs = require('fs');

var melRegisterInterest = new mongoose.Schema({
    email: String,
    created: Date
});

module.exports = MELRegisterInterest = mongoose.connection.model('MELRegisterInterest', melRegisterInterest);