var express = require('express')
var poweredBy = require('connect-powered-by');
var MongoStore = require('connect-mongo')(express);
var passport = require('passport');
var flash = require('connect-flash');

console.log("Initializing Middleware");
module.exports = function () {
    // Use middleware.  Standard [Connect](http://www.senchalabs.org/connect/)
    // middleware is built-in, with additional [third-party](https://github.com/senchalabs/connect/wiki)
    // middleware available as separate modules.
//  if ('development' == this.env) {
//    this.use(express.logger());
//  }

    console.log(this.env)

    this.datastore(require('locomotive-mongoose'));
    this.use(poweredBy('Locomotive'));
    this.use(express.favicon());
    this.use(express.static(__dirname + '/../../public'));
    this.use(express.bodyParser());
    this.use(express.cookieParser());

    this.use(express.methodOverride());
    this.use(this.router);
    this.use(express.errorHandler());
}
