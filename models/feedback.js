const mongoose = require('mongoose');

//TODO rating > feedback
const feedbackSchema = mongoose.Schema({
	rating: { type: Number, required: true },
	note: { type: String, required: true },
	userId: { type: String, required: true },
});

module.exports = mongoose.model('Feedback', feedbackSchema);
