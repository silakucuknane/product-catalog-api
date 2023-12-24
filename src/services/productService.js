const Product = require('../models/productModel');
const logger = require('../logs/logger');

exports.registerProduct = async (productData) => {
    try {
        const product = new Product(productData);
        return await product.save();
    } catch (error) {
        logger.error('Error registering product:', error);
        throw error;
    }
};

exports.updateProductCategory = async (productId, newCategory) => {
    try {
        const product = await Product.findById(productId);
        if (!product) {
            logger.error('Product not found');
            throw new Error('Product not found');
        }

        return await product.updateCategory(newCategory);
    } catch (error) {
        logger.error('Error updating product category:', error);
        throw error;
    }
};

exports.filterProducts = async (name, category) => {
    try {
        let query = {};

        if (name) {
            query.title = { $regex: new RegExp(name, 'i') }; // Case-insensitive name search
        }

        if (category) {
            query.category = category;
        }

        return await Product.find(query);
    } catch (error) {
        logger.error('Error filtering products:', error);
        throw error;
    }
};

exports.updateProductData = async (productId, updatedData) => {
    try {
        const product = await Product.findById(productId);
        if (!product) {
            logger.error('Product not found');
            throw new Error('Product not found');
        }

        return await product.updateProductData(updatedData);
    } catch (error) {
        logger.error('Error updating product data:', error);
        throw error;
    }
};

exports.deleteProduct = async (productId) => {
    try {
        return await Product.findByIdAndDelete(productId);
    } catch (error) {
        logger.error('Error deleting product:', error);
        throw error;
    }
};