const express = require('express');
const router = express.Router();

const users = require('./users/users.controller');
const products = require('./products/products.controller');
const reviews = require('./reviews/reviews.controller');
router.use('/users', users);
router.use('/products', products);
router.use('/reviews', reviews);

// add more routes

module.exports = router;