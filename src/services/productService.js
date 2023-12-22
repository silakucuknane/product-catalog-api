const Product = require('../models/productModel');

exports.registerProduct = async (productData) => {
    const product = new Product(productData);
    return product.save();
};

exports.updateProductCategory = async (productId, newCategory) => {
    const product = await Product.findById(productId);
    if (!product) {
        throw new Error('Product not found');
    }

    return product.updateCategory(newCategory);
};

exports.filterProducts = async (name, category) => {
    let query = {};

    if (name) {
        query.title = { $regex: new RegExp(name, 'i') }; // Case-insensitive name search
    }

    if (category) {
        query.category = category;
    }

    return Product.find(query);
};

exports.updateProductData = async (productId, updatedData) => {
    const product = await Product.findById(productId);
    if (!product) {
        throw new Error('Product not found');
    }

    return product.updateProductData(updatedData);
};

exports.deleteProduct = async (productId) => {
    return Product.findByIdAndDelete(productId);
};