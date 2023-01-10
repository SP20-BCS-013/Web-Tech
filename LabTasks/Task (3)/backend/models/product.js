const mongoose = require('mongoose');

const productSchema = mongoose.Schema({
    title:String,
    description:String,
    price:Number

})

module.exports = mongoose.model('Product',productSchema)