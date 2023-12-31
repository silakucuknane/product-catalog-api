const express = require('express');
const mongoose = require('mongoose');
const config = require('./src/config/config');
const productRoutes = require('./src/routes/productRoutes');
const logger = require('./src/logs/logger');
const loggerMiddleware = require('./src/middlewares/loggerMiddleware');

const app = express();

app.use(express.json());
app.use(loggerMiddleware);
app.use('/api', productRoutes);

mongoose.connect(config.database.uri, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log('Connected to MongoDB');
    })
    .catch((err) => {
        logger.error('Error connecting to MongoDB:', err);
    });

app.listen(config.server.port, () => {
    console.log(`Server is running on port ${config.server.port}`);
});