const mongoose = require('mongoose');

const commentSchema = mongoose.Schema({
	score: { type: Number, required: true },
	description: { type: String, required: true },
	user: { type: String, required: true },
	ratingId: { type: String, required: true },
});

module.exports = mongoose.model('Comment', commentSchema);
