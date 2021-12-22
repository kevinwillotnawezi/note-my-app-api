//add all imports and initializations of constants (same start in all files)
const express = require('express');
const mongoose = require('mongoose');
const app = express();

//link to mongodb (nosql)
mongoose
	.connect('mongodb+srv://kwillot:kwillot@cluster0.myvr9.mongodb.net/myFirstDatabase?retryWrites=true&w=majority', { useNewUrlParser: true, useUnifiedTopology: true })
	.then(() => console.log('Connexion à MongoDB réussie !'))
	.catch(() => console.log('Connexion à MongoDB échouée !'));

//avoid CORS problem
app.use((req, res, next) => {
	res.setHeader('Access-Control-Allow-Origin', '*');
	res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
	res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
	next();
});

//TODO change test below
app.use((req, res) => {
	res.json({ message: 'Bien reçu' });
});

module.exports = app;
