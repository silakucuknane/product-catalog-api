module.exports = {
    // Database configuration
    database: {
        uri: process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/productCatalog',
    },

    // Server configuration
    server: {
        port: process.env.PORT || 3000,
    }
};