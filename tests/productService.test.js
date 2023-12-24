const ProductService = require('../src/services/productService');
const Product = require('../src/models/Product');

describe('ProductService', () => {
    it('should create a new product', () => {
        // Arrange
        const productData = { title: 'Test Product', description: 'Test', price: 10.99, category: 'Test' };

        // Act
        const product = ProductService.createProduct(productData);

        // Assert
        expect(product).toBeInstanceOf(Product);
        expect(product.title).toBe('Test Product');
        expect(product.description).toBe('Test');
        expect(product.price).toBe(10.99);
        expect(product.category).toBe('Test');
    });

    it('should update the category of a product', async () => {
        // Arrange
        const productId = 'product-id';
        const newCategory = 'New Category';

        // Act
        const updatedProduct = await ProductService.updateProductCategory(productId, newCategory);

        // Assert
        expect(updatedProduct).toBeInstanceOf(Product);
        expect(updatedProduct.category).toBe(newCategory);
    });

    it('should filter products by name and category', async () => {
        // Arrange
        const name = 'Test';
        const category = 'Test';

        // Act
        const filteredProducts = await ProductService.filterProducts(name, category);

        // Assert
        expect(filteredProducts).toBeInstanceOf(Array);
        expect(filteredProducts.length).toBeGreaterThan(0);
        filteredProducts.forEach((product) => {
            expect(product).toBeInstanceOf(Product);
            expect(product.title.toLowerCase()).toContain(name.toLowerCase());
            expect(product.category).toBe(category);
        });
    });

    it('should update the data of a product', async () => {
        // Arrange
        const productId = 'product-id';
        const updatedData = { title: 'Updated Product', description: 'Updated', price: 19.99, category: 'Updated' };

        // Act
        const updatedProduct = await ProductService.updateProductData(productId, updatedData);

        // Assert
        expect(updatedProduct).toBeInstanceOf(Product);
        expect(updatedProduct.title).toBe(updatedData.title);
        expect(updatedProduct.description).toBe(updatedData.description);
        expect(updatedProduct.price).toBe(updatedData.price);
        expect(updatedProduct.category).toBe(updatedData.category);
    });

    it('should delete a product', async () => {
        // Arrange
        const productId = 'product-id';

        // Act
        const deletedProduct = await ProductService.deleteProduct(productId);

        // Assert
        expect(deletedProduct).toBeInstanceOf(Product);
        expect(deletedProduct._id).toBe(productId);
    });
});