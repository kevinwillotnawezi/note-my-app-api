const Comment = require('../models/Comment');

exports.createComment = (req, res, next) => {
	//delete req.body._id;
	const comment = new Comment({
		...req.body,
	});
	comment
		.save()
		.then(() => res.status(201).json({ message: 'Comment registered successfully' }))
		.catch((error) => res.status(400).json({ message: error }));
};

exports.getAllComments = (req, res, next) => {
	Comment.find()
		.then((comments) => res.status(200).json(comments))
		.catch((error) => res.status(400).json({ message: error }));
};

exports.getAllCommentsByFeedbackId = (req, res, next) => {
	Notation.find({ feedbackId: req.params.id })
		.then((notations) => res.status(200).json(notations))
		.catch((error) => res.status(400).json({ message: error }));
};

//Get only one comment is not used yet
exports.getComment = (req, res, next) => {
	Comment.findOne({ _id: req.params.id })
		.then((commment) => res.status(200).json(commment))
		.catch((error) => res.status(400).json({ message: error }));
};

exports.updateComment = (req, res, next) => {
	Comment.updateOne({ _id: req.params.id }, { ...req.body, _id: req.params.id }) //TODO remove second _id?
		.then(() => res.status(200).json({ message: 'Comment updated' }))
		.catch((error) => res.status(400).json({ message: error }));
};

//Delete a comment is not used yet
exports.deleteComment = (req, res, next) => {
	Comment.deleteOne({ _id: req.params.id })
		.then(() => res.status(200).json({ message: 'Comment deleted' }))
		.catch((error) => res.status(400).json({ message: error }));
};
