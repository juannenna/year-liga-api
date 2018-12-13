const express = require('express');
const router = express.Router();

const users = require('./users/users.controller');
const decks = require('./decks/decks.controller');
const reviews = require('./reviews/reviews.controller');
const results = require('./results/results.controller');
router.use('/users', users);
router.use('/decks', decks);
router.use('/reviews', reviews);
router.use('/results', results);

// add more routes

module.exports = router;