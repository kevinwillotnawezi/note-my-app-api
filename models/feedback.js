const mongoose = require('mongoose');

const feedbackSchema = mongoose.Schema({
	rating: { type: Number, required: true },
	note: { type: String, required: true },
	category: { type: String },
	status: { type: String, required: true },
	userId: { type: String, required: true },
});

module.exports = mongoose.model('Feedback', feedbackSchema);
