const mongoose = require('mongoose');
const mongoosePaginate = require('mongoose-paginate');

const EventSchema = new mongoose.Schema({
  name: {type: String},
  results: [{type: mongoose.Schema.Types.ObjectId, ref: 'Result'}],
  rounds: {type: Number},
  date: {type: Date, default: Date.now},
  format: {type: String},
  users: [{type: mongoose.Schema.Types.ObjectId, ref: 'User'}]
});

//UserSchema.plugin(mongoosePaginate);
EventSchema.set('toJSON', {virtuals: true});

module.exports = mongoose.model('Event', EventSchema);