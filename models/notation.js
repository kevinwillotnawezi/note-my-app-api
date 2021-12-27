const mongoose = require('mongoose');

const notationSchema = mongoose.Schema({
	value: {
		type: Number,
		required: true,
		min: [-1, 'Value should be -1,0,1 '],
		max: [1, 'Value should be -1,0,1 '],
		validate: { validator: Number.isInteger, message: '{VALUE} is not an integer value' },
	},
	userId: { type: String, required: true },
	feedbackId: { type: String },
	commentId: { type: String },
});

module.exports = mongoose.model('Notation', notationSchema);
