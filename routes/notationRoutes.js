const express = require('express');
const router = express.Router();
const notationController = require('../controllers/notationController');

router.post('/', notationController.createNotation);
router.get('/', notationController.getAllNotations);
router.get('/:id', notationController.getNotation);
router.put('/:id', notationController.updateNotation);
router.delete('/:id', notationController.deleteNotation);

module.exports = router;
