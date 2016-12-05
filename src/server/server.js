// ----- Server configuration. ----- //

// ================= Modules ================= //

var app            = express();
var express        = require('express');
var bodyParser     = require('body-parser');
var methodOverride = require('method-override');

// ============== Database ============= //

// Config database.
var db = require('./app/config/database');
// Connection to mongoDB database.
mongoose.connect(db.url); 

// =========== Configuration =========== //

// Get all data/stuff of the body (POST) parameters, parse application/json.
app.use(bodyParser.json()); 
// Parse application/vnd.api+json as json.
app.use(bodyParser.json({ type: 'application/vnd.api+json' })); 
// Parse application/x-www-form-urlencoded.
app.use(bodyParser.urlencoded({ extended: true })); 
 
// =============== Routes ================ //

// Configure our routes.
require('./config/routes')(app); 

// ============== Start app ============== //

// Application port.
var port = process.env.PORT || 9090; 

// Startup app.
app.listen(port);                                 
console.log('Organizer running at port: ' + port);

// ============== Expose app ============= //
     
exports = module.exports = app;        