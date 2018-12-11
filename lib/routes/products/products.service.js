const config = require('../../config.json');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const db = require('../../_helpers/db');
const Product = db.Product;

module.exports = {
  getAll,
  getById,
  getBrands,
  getByBrand,
  create,
  update,
  delete: _delete
};

async function getAll() {
  return await Product.find().select('-hash');
}

async function getById(id) {
  return await Product.findById(id).select('-hash');
}

async function getByBrand(brand) {
  return await Product.find({brand: {$regex: brand, $options: 'i'}});
}

async function getBrands() {
  return await Product.distinct('brand')
}
async function create(productParam) {

  const product = new Product(productParam);
  await product.save();
}

async function update(id, productParam) {
  const product = await Product.findById(id);

  // validate
  if (!product) throw 'Product not found';
  // copy userParam properties to user
  Object.assign(product, productParam);

  await product.save();
}
async function _delete(id) {
  await Product.findByIdAndRemove(id);
}