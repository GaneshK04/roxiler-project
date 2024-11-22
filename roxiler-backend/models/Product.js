const mongoose = require('../db');

const productSchema = new mongoose.Schema({
    id: Number,
    title: String,
    description: String,
    price: Number,
    dateOfSale: String,
    category: String,
    sold: Boolean,
});

const Product = mongoose.model('Product', productSchema);

module.exports = Product;
