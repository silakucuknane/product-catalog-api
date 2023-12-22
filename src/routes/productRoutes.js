const express = require('express');
const router = express.Router();
const productController = require('../controllers/productController');
const validationMiddleware = require('../middlewares/validationMiddleware');

// Route for registering a new product
router.post('/products', validationMiddleware.validateProduct, productController.registerProduct);

// Route for updating a product category
router.put('/products/:productId/category', validationMiddleware.validateCategoryUpdate, productController.updateProductCategory);

// Route for filtering products by name or category
router.get('/products', validationMiddleware.validateFilterParams, productController.filterProducts);

// Route for updating product data
router.put('/products/:productId', validationMiddleware.validateProductUpdate, productController.updateProductData);

// Route for deleting a product
router.delete('/products/:productId', productController.deleteProduct);

module.exports = router;