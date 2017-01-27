var express = require('express');
var http = require('http');
var https = require('https');
var path =  require("path");
var bodyParser = require('body-parser');
var fs = require("fs");

var app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public')));
app.use('/bower_components', express.static(__dirname + '/bower_components'));
require(path.join(__dirname, 'route.js'))(app, path, https, fs);

app.listen(3000);

