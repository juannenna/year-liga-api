const express = require('express');
const router = express.Router();
const deckService = require('./decks.service')
// routes
router.post('/create', create);
router.get('/decks/byUser/:user', getByUser);
router.get('/', getAll);
router.get('/:id', getById);
router.put('/:id', update);
router.delete('/:id', _delete);

module.exports = router;

function create(req, res, next) {
  deckService.create(req.body)
    .then(() => res.json({}))
    .catch(err => next(err));
}

function getAll(req, res, next) {
  deckService.getAll()
    .then(products => res.json(products))
    .catch(err => next(err));
}

function getCurrent(req, res, next) {
  deckService.getById(req.user.sub)
    .then(user => user ? res.json(user) : res.sendStatus(404))
    .catch(err => next(err));
}
function getByUser(req, res, next) {
  deckService.getByUser(req.params.user)
    .then(products => res.json(products))
    .catch(err => next(err));
}
function getById(req, res, next) {
  deckService.getById(req.params.id)
    .then(user => user ? res.json(user) : res.sendStatus(404))
    .catch(err => next(err));
}

function getBrands(req, res, next) {
  deckService.getBrands()
    .then(brands => res.json(brands))
    .catch(err => next(err));
}

function update(req, res, next) {
  deckService.update(req.params.id, req.body)
    .then(() => res.json({}))
    .catch(err => next(err));
}

function _delete(req, res, next) {
  deckService.delete(req.params.id)
    .then(() => res.json({}))
    .catch(err => next(err));
}
