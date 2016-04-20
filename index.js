'use strict';
var express = require('express');
var app = express();
app.set('port', (process.env.PORT || 8000));
app.set('views', __dirname + '/www');
app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);
app.use('/css', express.static(__dirname + '/www/css'));
app.use('/js', express.static(__dirname + '/www/js'));
app.use('/img', express.static(__dirname + '/src/static/img'));
app.use('/favicon.ico', express.static(__dirname + '/www/img/favicon.ico'));
app.use('/fonts', express.static(__dirname + '/www/fonts'));
app.use('/bower_components', express.static(__dirname + '/www/bower_components'));
app.use('/views', express.static(__dirname + '/www/views'));
app.listen(app.get('port'), function () {
    /*eslint-disable */
    console.log('App is running on port ' + app.get('port'));
    /*eslint-enable */
});

app.get('/', function (req, res) {
	res.status(200).render('index.html');
});
app.get('/cordova.js', function (req, res) {
    res.status(200).send('{}');
});