const mongoose = require('mongoose');
const mongoosePaginate = require('mongoose-paginate');;

const ResultSchema = new mongoose.Schema({
  userId: {type: String},
  deckId: {type: String},
  points: {type: Number},
  position: {type: String},
  playersInEvent: {type: String}
});

//UserSchema.plugin(mongoosePaginate);
ResultSchema.set('toJSON', {virtuals: true});

module.exports = mongoose.model('Result', ResultSchema);