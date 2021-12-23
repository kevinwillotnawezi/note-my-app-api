const Rating = require('Rating');

exports.createRating = (req, res, next) => {
	//delete req.body._id
	const rating = new Rating({
		...req.body,
	});
	rating
		.save()
		.then(() => res.status(200).json({ message: 'Rating created successfully' }))
		.catch((err) => res.status(400).json({ message: err }));
};

exports.getAllRatings = (req, res, next) => {
	Rating.find()
		.then((ratings) => res.status(200).json(ratings))
		.catch((err) => res.status(400).json({ message: err }));
};

//Get only one rating is not used yet
exports.getRating = (req, res, next) => {
	Rating.findOne({ _id: req.params.id })
		.then((rating) => res.status(200).json(rating))
		.catch((err) => res.status(400).json({ message: err }));
};

//Update a Rating is not used yet
exports.updateRating = (req, res, next) => {
	Rating.updateOne({ _id: req.params.id }),
		{ ...req.body, _id: req.params.id }
			.then(() => res.status(200).json({ message: 'Rating updated' }))
			.catch((err) => res.status(400).json({ message: err }));
};

//Delete a Rating is not used yet
exports.deleteRating = (req, res, next) => {
	Rating.deleteOne({ _id: req.params.id })
		.then(() => res.status(200).json({ message: 'Rating deleted' }))
		.catch((err) => res.status(400).json({ message: err }));
};
