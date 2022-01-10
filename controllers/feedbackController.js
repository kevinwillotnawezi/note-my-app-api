const Feedback = require('../models/feedback');

exports.createFeedback = (req, res, next) => {
	const feedback = new Feedback({
		...req.body,
	});
	feedback
		.save()
		.then(() => res.status(200).json({ message: 'Feedback created successfully' }))
		.catch((error) => res.status(400).json({ message: error }));
};

exports.getAllFeedbacks = (req, res, next) => {
	Feedback.find()
		.then((feedbacks) => res.status(200).json(feedbacks))
		.catch((error) => res.status(400).json({ message: error }));
};

exports.updateFeedback = (req, res, next) => {
	Feedback.updateOne({ _id: req.params.id }, { ...req.body, _id: req.params.id })
		.then(() => res.status(200).json({ message: 'Feedback updated' }))
		.catch((error) => res.status(400).json({ message: error }));
};

//Get only one feedback is not used yet
exports.getFeedback = (req, res, next) => {
	Feedback.findOne({ _id: req.params.id })
		.then((feedback) => res.status(200).json(feedback))
		.catch((error) => res.status(400).json({ message: error }));
};

//Delete a Feedback is not used yet
exports.deleteFeedback = (req, res, next) => {
	Feedback.deleteOne({ _id: req.params.id })
		.then(() => res.status(200).json({ message: 'Feedback deleted' }))
		.catch((error) => res.status(400).json({ message: error }));
};
