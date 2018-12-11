const mongoose = require('mongoose');
const mongoosePaginate = require('mongoose-paginate');

const UserSchema = new mongoose.Schema({

    email: { type: String, unique: true, index: true },
    hash: { type: String, required: true },
    firstName: { type: String, required: true },
    lastName: { type: String, required: false },
    birthday: { type: Date, required: false },
    gender: { type: String, required: false },
    password: { type: String, required: true },
    ageGroup: { type: String, required: false },
    createdDate: { type: Date, default: Date.now }

});

//UserSchema.plugin(mongoosePaginate);
UserSchema.set('toJSON', {virtuals: true});

module.exports = mongoose.model('User', UserSchema);