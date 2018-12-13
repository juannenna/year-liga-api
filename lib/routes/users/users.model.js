const mongoose = require('mongoose');
const mongoosePaginate = require('mongoose-paginate');

const UserSchema = new mongoose.Schema({
    username: { type: String, required: true, unique: true, index: true },
    results: [{type: mongoose.Schema.Types.ObjectId, ref: 'Result'}],
    decks: [{type: mongoose.Schema.Types.ObjectId, ref: 'Deck'}],
});

//UserSchema.plugin(mongoosePaginate);
UserSchema.set('toJSON', {virtuals: true});

module.exports = mongoose.model('User', UserSchema);