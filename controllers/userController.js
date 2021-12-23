const User = require('../models/user');
const bcrypt = require('bcrypt');

exports.signup = (req, res, next) => {
	// encrypt the password before sendind data to server
	bcrypt
		.hash(req.body.password, 10)
		.then((hash) => {
			const user = new User({
				email: req.body.email,
				password: hash,
			});
			user
				.save()
				.then(() => res.status(201).json({ message: 'User created successfully' }))
				.catch((error) => res.status(400).json({ error }));
		})
		.catch((error) => res.status(500).json({ error }));
};

exports.login = (req, res, next) => {
	User.findOne({ email: req.body.email })
		.then(
			//check if the password was generated with the same based String
			bcrypt.compare(req.body.password, user.password).then((valid) => {
				if (!valid) {
					return res.status(401).json({ error: 'User not found' });
				}
				if (user.password !== req.body.password) {
					return res.status(401).json({ message: 'Invalid password' });
				}
				res.status(200).json({ message: 'User successfully logged in' });
			})
		)
		.catch(() => res.status(404).json({ message: 'User not found' }));
};
