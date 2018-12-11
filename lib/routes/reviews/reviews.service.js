const config = require('../../config.json');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const db = require('../../_helpers/db');
const Review = db.Review;

module.exports = {
  getAll,
  getById,
  create,
  update,
  delete: _delete
};

async function getAll() {
  return await Review.find().select('-hash');
}
async function getById(id) {
  return await Review.findById(id).select('-hash');
}
async function create(reviewParams) {
  const review = new Review(reviewParams);
  await review.save();
}
async function update(id, reviewParams) {
  const review = await Review.findById(id);

  // validate
  if (!review) throw 'Product not found';
  // copy userParam properties to user
  Object.assign(review, reviewParams);

  await review.save();
}
async function _delete(id) {
  await Review.findByIdAndRemove(id);
}