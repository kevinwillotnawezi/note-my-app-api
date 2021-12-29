const Notation = require('../models/Notation');

exports.createNotation = (req, res, next) => {
	//delete req.body._id;
	const notation = new Notation({
		...req.body,
	});
	notation
		.save()
		.then(() => res.status(201).json({ message: 'Notation registered successfully' }))
		.catch((error) => res.status(400).json({ message: error }));
};

exports.getAllNotations = (req, res, next) => {
	Notation.find()
		.then((notations) => res.status(200).json(notations))
		.catch((error) => res.status(400).json({ message: error }));
};

exports.getNumberOfNotationsByCommentId = (req, res, next) => {
	Notation.count({ commentId: req.params.id })
		.then((notations) => res.status(200).json(notations))
		.catch((error) => res.status(400).json({ message: error }));
};

exports.getNumberOfNotationsByFeedbackId = (req, res, next) => {
	Notation.count({ feedbackId: req.params.id })
		.then((notations) => res.status(200).json(notations))
		.catch((error) => res.status(400).json({ message: error }));
};

//Get only one notation is not used yet
exports.getNotation = (req, res, next) => {
	Notation.findOne({ _id: req.params.id })
		.then((commment) => res.status(200).json(commment))
		.catch((error) => res.status(400).json({ message: error }));
};

exports.updateNotation = (req, res, next) => {
	Notation.updateOne({ _id: req.params.id }, { ...req.body, _id: req.params.id }) //TODO remove second _id?
		.then(() => res.status(200).json({ message: 'Notation updated' }))
		.catch((error) => res.status(400).json({ message: error }));
};

//Delete a notation is not used yet
exports.deleteNotation = (req, res, next) => {
	Notation.deleteOne({ _id: req.params.id })
		.then(() => res.status(200).json({ message: 'Notation deleted' }))
		.catch((error) => res.status(400).json({ message: error }));
};
