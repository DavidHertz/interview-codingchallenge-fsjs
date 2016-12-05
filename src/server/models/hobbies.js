// ----- JOBBIES MODEL ----- //

var Jobbies = null;
// Using 'mongoose' module.
var mongoose = require('mongoose');
// Mongoose schema reference.
var Schema = mongoose.Schema;


// ====== Schema ====== //
var jobbiesSchema = new Schema({

	name: String,
	description: String,
	created: { type: Date, default: Date.now }
	
});


Jobbies = mongoose.model('Jobbies', jobbiesSchema);

// Exports model in order to make available.
module.exports = Jobbies;