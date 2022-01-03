const Notation = require('../models/Notation');

exports.createNotation = (req, res, next) => {
	const notation = new Notation({
		...req.body,
	});

	//Check if there is an existing notification for this user and this feedback/comment
	Notation.findOne({ userId: notation.userId, feedbackId: notation.feedbackId, commentId: notation.commentId })
		.then((notationFound) => {
			if (notationFound) throw 'Existing feedback/comment';
			notation
				.save()
				.then(() => res.status(201).json({ message: 'Notation registered successfully' }))
				.catch((error) => res.status(400).json({ message: error }));
		})
		.catch((error) => res.status(400).json({ message: error }));
};

exports.getNumberOfNotationsByCommentId = (req, res, next) => {
	Notation.aggregate([{ $match: { commentId: req.params.id } }, { $group: { _id: '$commentId', totalSum: { $sum: '$value' } } }])
		.then((aggregates) => res.status(200).json(aggregates[0]?.totalSum || 0))
		.catch((error) => res.status(400).json({ message: error }));
};

exports.getNumberOfNotationsByFeedbackId = (req, res, next) => {
	Notation.aggregate([{ $match: { feedbackId: req.params.id } }, { $group: { _id: '$feedbackId', totalSum: { $sum: '$value' } } }])
		.then((aggregates) => res.status(200).json(aggregates[0]?.totalSum || 0))
		.catch((error) => res.status(400).json({ message: error }));
};

//Get all notations is not used
exports.getAllNotations = (req, res, next) => {
	Notation.find()
		.then((notations) => res.status(200).json(notations))
		.catch((error) => res.status(400).json({ message: error }));
};

//Get only one notation is not used
exports.getNotation = (req, res, next) => {
	Notation.findOne({ _id: req.params.id })
		.then((notation) => res.status(200).json(notation))
		.catch((error) => res.status(400).json({ message: error }));
};

//Update notation is not used
exports.updateNotation = (req, res, next) => {
	Notation.updateOne({ _id: req.params.id }, { ...req.body, _id: req.params.id })
		.then(() => res.status(200).json({ message: 'Notation updated' }))
		.catch((error) => res.status(400).json({ message: error }));
};

//Delete a notation is not used
exports.deleteNotation = (req, res, next) => {
	Notation.deleteOne({ _id: req.params.id })
		.then(() => res.status(200).json({ message: 'Notation deleted' }))
		.catch((error) => res.status(400).json({ message: error }));
};
