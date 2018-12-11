const express = require('express');
const router = express.Router();
const productService = require('./products.service')
// routes
router.post('/create', create);
router.get('/brands', getBrands);
router.get('/brands/:brand', getByBrand);
router.get('/', getAll);
router.get('/:id', getById);
router.put('/:id', update);
router.delete('/:id', _delete);

module.exports = router;

function create(req, res, next) {
  productService.create(req.body)
    .then(() => res.json({}))
    .catch(err => next(err));
}

function getAll(req, res, next) {
  productService.getAll()
    .then(products => res.json(products))
    .catch(err => next(err));
}

function getCurrent(req, res, next) {
  productService.getById(req.user.sub)
    .then(user => user ? res.json(user) : res.sendStatus(404))
    .catch(err => next(err));
}
function getByBrand(req, res, next) {
  productService.getByBrand(req.params.brand)
    .then(products => res.json(products))
    .catch(err => next(err));
}
function getById(req, res, next) {
  productService.getById(req.params.id)
    .then(user => user ? res.json(user) : res.sendStatus(404))
    .catch(err => next(err));
}

function getBrands(req, res, next) {
  productService.getBrands()
    .then(brands => res.json(brands))
    .catch(err => next(err));
}

function update(req, res, next) {
  productService.update(req.params.id, req.body)
    .then(() => res.json({}))
    .catch(err => next(err));
}

function _delete(req, res, next) {
  productService.delete(req.params.id)
    .then(() => res.json({}))
    .catch(err => next(err));
}
