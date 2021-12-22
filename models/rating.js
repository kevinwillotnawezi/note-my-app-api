const mongoose = require('mongoose');

const ratingSchema = mongoose.Schema.create({
	note: { type: Number, required: true },
	description: { type: String, required: true },
	user: { type: String, required: true },
});

module.exports = mongoose.model('Rating', ratingSchema);
