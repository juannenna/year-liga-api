const express = require('express');
const router = express.Router();

const users = require('./users/users.controller');
const products = require('./decks/decks.controller');
const reviews = require('./reviews/reviews.controller');
const results = require('./results/results.controller');
router.use('/users', users);
router.use('/decks', products);
router.use('/reviews', reviews);
router.use('/results', results);

// add more routes

module.exports = router;