const mongoose = require('mongoose');

const commentSchema = mongoose.Schema({
	description: { type: String, required: true },
	userId: { type: String, required: true },
	feedbackId: { type: String, required: true },
});

module.exports = mongoose.model('Comment', commentSchema);
