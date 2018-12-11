const mongoose = require('mongoose');
const mongoosePaginate = require('mongoose-paginate');;

const ResultSchema = new mongoose.Schema({
  userId: {type: String},
  productId: {type: String},
  results: {
    commentary: {type: String},
    likedIt: {type: Boolean}
  }
});

//UserSchema.plugin(mongoosePaginate);
ResultSchema.set('toJSON', {virtuals: true});

module.exports = mongoose.model('Result', ResultSchema);