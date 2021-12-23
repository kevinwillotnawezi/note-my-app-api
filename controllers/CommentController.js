const Comment = require('../models/Comment');

exports.createComment = (req, res, next) => {
	//delete req.body._id;
	const comment = new Comment({
		...req.body,
	});
	comment
		.save()
		.then(() => res.status(201).json({ message: 'Comment registered successfully' }))
		.catch((err) => res.status(400).json({ message: err }));
};

exports.getAllComments = (req, res, next) => {
	Comment.find()
		.then((comments) => res.status(200).json(comments))
		.catch((err) => res.status(400).json({ message: err }));
};

//Get only one comment is not used yet
exports.getComment = (req, res, next) => {
	Comment.findOne({ _id: req.params.id })
		.then((commment) => res.status(200).json(commment))
		.catch((err) => res.status(400).json({ message: err }));
};

//Update a comment is not used yet
exports.updateComment = (req, res, next) => {
	Comment.updateOne({ _id: req.params.id }),
		{ ...req.body, _id: req.params.id }
			.then(() => res.status(200).json({ message: 'Comment updated' }))
			.catch((err) => res.status(400).json({ message: err }));
};

//Delete a comment is not used yet
exports.deleteComment = (req, res, next) => {
	Comment.deleteOne({ _id: req.params.id })
		.then(() => res.status(200).json({ message: 'Comment deleted' }))
		.catch((err) => res.status(400).json({ message: err }));
};
