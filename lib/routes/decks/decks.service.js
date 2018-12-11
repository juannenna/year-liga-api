const db = require('../../_helpers/db');
const Deck = db.Deck;

module.exports = {
  getAll,
  getById,
  getBrands,
  getByUser,
  create,
  update,
  delete: _delete
};

async function getAll() {
  return await Deck.find().select('-hash');
}

async function getById(id) {
  return await Deck.findById(id).select('-hash');
}

async function getByUser(id) {
  return await Deck.find({userId: `${id}`});
}

async function getBrands() {
  return await Deck.distinct('brand')
}
async function create(deckParam) {

  const deck = new Deck(deckParam);
  await deck.save();
}

async function update(id, deckParam) {
  const deck = await Deck.findById(id);

  // validate
  if (!deck) throw 'Deck not found';
  // copy userParam properties to user
  Object.assign(deck, deckParam);

  await deck.save();
}
async function _delete(id) {
  await Deck.findByIdAndRemove(id);
}