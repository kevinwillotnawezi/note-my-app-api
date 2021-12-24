const mongoose = require('mongoose');

//TODO rating > feedback
const ratingSchema = mongoose.Schema({
	note: { type: Number, required: true },
	description: { type: String, required: true },
	user: { type: String, required: true },
});

module.exports = mongoose.model('Rating', ratingSchema);
