const express = require('express');
const router = express.Router();
const resultsService = require('./results.service')
// routes
router.post('/create', create);
router.get('/', getAll);

module.exports = router;

function create(req, res, next) {
  resultsService.create(req.body)
    .then(() => res.json({}))
    .catch(err => next(err));
}

function getAll(req, res, next) {
  resultsService.getAll()
    .then(results => res.json(results))
    .catch(err => next(err));
}
