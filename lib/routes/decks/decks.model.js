const mongoose = require('mongoose');
const mongoosePaginate = require('mongoose-paginate');

const DeckSchema = new mongoose.Schema({
    name: { type: String, required: true },
    userId: {type: String, required: true}
});

//UserSchema.plugin(mongoosePaginate);
DeckSchema.set('toJSON', {virtuals: true});

module.exports = mongoose.model('Deck', DeckSchema);