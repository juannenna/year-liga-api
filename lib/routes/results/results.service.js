const config = require('../../config.json');
const bcrypt = require('bcryptjs');
const db = require('../../_helpers/db');
const Result = db.Result;

module.exports = {
  getAll,
  getById,
  create,
  update,
  getByUserId,
  delete: _delete
};

async function getAll() {
  return await Result.find().select('-hash');
}
async function getById(id) {
  return await Result.findById(id).select('-hash');
}
async function getByUserId(id) {
  return await Result.find({user: id});
}
async function create(reviewParams) {
  const review = new Result(reviewParams);
  return await review.save();
}
async function update(id, reviewParams) {
  const review = await Result.findById(id);

  // validate
  if (!review) throw 'Product not found';
  // copy userParam properties to user
  Object.assign(review, reviewParams);

  await review.save();
}
async function _delete(id) {
  await Result.findByIdAndRemove(id);
}