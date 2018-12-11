const mongoose = require('mongoose');
const mongoosePaginate = require('mongoose-paginate');

const ProductSchema = new mongoose.Schema({

    brand: { type: String },
    name: { type: String },
    price: { type: Number, required: true },
    ageGroup: { type: String, required: true },
    color: { type: String, required: true },
    gender: { type: String, required: true },
    imgUrl: { type: String, required: true }
});

//UserSchema.plugin(mongoosePaginate);
ProductSchema.set('toJSON', {virtuals: true});

module.exports = mongoose.model('Product', ProductSchema);