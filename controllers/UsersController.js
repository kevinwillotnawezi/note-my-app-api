const User = require('../models/user');

exports.signup = (req, res, next) => {
	const user = new User({
		...req.body,
	});
	user
		.save()
		.then(() => res.status(201).json({ message: 'User created successfully' }))
		.catch((err) => res.status(400).json({ message: err }));
};

exports.login = (req, res, next) => {
	User.findOne({ email: req.body.email })
		.then((user) => {
			if (user.password !== req.body.password) {
				return res.status(401).json({ message: 'Invalid password' });
			}
			res.status(200).json(user);
		})
		.catch(() => res.status(404).json({ message: 'User not found' }));
};
