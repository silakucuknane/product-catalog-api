const productService = require('../services/productService');

exports.registerProduct = async (req, res, next) => {
    try {
        const product = await productService.registerProduct(req.body);
        res.json(product);
    } catch (error) {
        console.error('Error creating product:', error);
        next(error);
    }
};

exports.updateProductCategory = async (req, res, next) => {
    try {
        const { productId } = req.params;
        const { category } = req.body;

        const updatedProduct = await productService.updateProductCategory(productId, category);
        res.json(updatedProduct);
    } catch (error) {
        next(error);
    }
};

exports.filterProducts = async (req, res, next) => {
    try {
        const { name, category } = req.query;

        const filteredProducts = await productService.filterProducts(name, category);
        res.json(filteredProducts);
    } catch (error) {
        next(error);
    }
};

exports.updateProductData = async (req, res, next) => {
    try {
        const { productId } = req.params;
        const updatedData = req.body;

        const updatedProduct = await productService.updateProductData(productId, updatedData);
        res.json(updatedProduct);
    } catch (error) {
        next(error);
    }
};

exports.deleteProduct = async (req, res, next) => {
    try {
        const { productId } = req.params;

        await productService.deleteProduct(productId);
        res.json({ message: 'Product deleted successfully' });
    } catch (error) {
        next(error);
    }
};