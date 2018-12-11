const express = require('express');
const router = express.Router();
const reviewsService = require('./reviews.service')
// routes
router.post('/create', create);
router.get('/', getAll);

module.exports = router;

function create(req, res, next) {
  reviewsService.create(req.body)
    .then(() => res.json({}))
    .catch(err => next(err));
}

function getAll(req, res, next) {
  reviewsService.getAll()
    .then(reviews => res.json(reviews))
    .catch(err => next(err));
}
