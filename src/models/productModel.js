const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    title: String,
    description: String,
    price: Number,
    category: String,
});

productSchema.methods.updateCategory = function (newCategory) {
    this.category = newCategory;
    return this.save();
};

productSchema.methods.updateProductData = function (updatedData) {
    Object.assign(this, updatedData);
    return this.save();
};

const Product = mongoose.model('Product', productSchema);

module.exports = Product;