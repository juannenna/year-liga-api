const mongoose = require('mongoose');
const mongoosePaginate = require('mongoose-paginate');

const DeckSchema = new mongoose.Schema({
    name: { type: String, required: true },
    user: {type: mongoose.Schema.Types.ObjectId, ref: 'User'}
});

//UserSchema.plugin(mongoosePaginate);
DeckSchema.set('toJSON', {virtuals: true});

module.exports = mongoose.model('Deck', DeckSchema);