const Rating = require('../models/rating');

exports.createRating = (req, res, next) => {
	// delete req.body._id;
	const rating = new Rating({
		...req.body,
	});
	rating
		.save()
		.then(() => res.status(200).json({ message: 'Rating created successfully' }))
		.catch((error) => res.status(400).json({ message: error }));
};

exports.getAllRatings = (req, res, next) => {
	Rating.find()
		.then((ratings) => res.status(200).json(ratings))
		.catch((error) => res.status(400).json({ message: error }));
};

//Get only one rating is not used yet
exports.getRating = (req, res, next) => {
	Rating.findOne({ _id: req.params.id })
		.then((rating) => res.status(200).json(rating))
		.catch((error) => res.status(400).json({ message: error }));
};

//Update a Rating is not used yet
exports.updateRating = (req, res, next) => {
	Rating.updateOne({ _id: req.params.id }),
		{ ...req.body, _id: req.params.id }
			.then(() => res.status(200).json({ message: 'Rating updated' }))
			.catch((error) => res.status(400).json({ message: error }));
};

//Delete a Rating is not used yet
exports.deleteRating = (req, res, next) => {
	Rating.deleteOne({ _id: req.params.id })
		.then(() => res.status(200).json({ message: 'Rating deleted' }))
		.catch((error) => res.status(400).json({ message: error }));
};
