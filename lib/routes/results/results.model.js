const mongoose = require('mongoose');
const mongoosePaginate = require('mongoose-paginate');;

const ResultSchema = new mongoose.Schema({
  user: {type: mongoose.Schema.Types.ObjectId, ref: 'User'},
  deck: {type: mongoose.Schema.Types.ObjectId, ref: 'Deck'},
  points: {type: Number},
  position: {type: String},
  event: {type: mongoose.Schema.Types.ObjectId, ref: 'Event'}
}, {timestamps: true});

//UserSchema.plugin(mongoosePaginate);
ResultSchema.set('toJSON', {virtuals: true});

module.exports = mongoose.model('Result', ResultSchema);