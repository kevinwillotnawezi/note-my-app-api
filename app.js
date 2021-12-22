const express = require('express');
const app = express();

app.use((req, res, next) => {
	res.json({ message: 'Bien reçu' });
});

module.exports = app;
