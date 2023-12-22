const Joi = require('joi');

// Validation method for registering a new product
exports.validateProduct = (req, res, next) => {
    const schema = Joi.object({
        title: Joi.string().required(),
        description: Joi.string().required(),
        price: Joi.number().required(),
        category: Joi.string().required(),
    });

    const { error } = schema.validate(req.body);
    if (error) {
        return res.status(400).json({ error: error.details[0].message });
    }

    next();
};

// Validation method for updating a product category
exports.validateCategoryUpdate = (req, res, next) => {
    const schema = Joi.object({
        category: Joi.string().required(),
    });

    const { error } = schema.validate(req.body);
    if (error) {
        return res.status(400).json({ error: error.details[0].message });
    }

    next();
};

// Validation method for filtering products by name or category
exports.validateFilterParams = (req, res, next) => {
    const schema = Joi.object({
        name: Joi.string(),
        category: Joi.string(),
    });

    const { error } = schema.validate(req.query);
    if (error) {
        return res.status(400).json({ error: error.details[0].message });
    }

    next();
};

exports.validateProductUpdate = (req, res, next) => {
    const schema = Joi.object({
        title: Joi.string(),
        description: Joi.string(),
        price: Joi.number(),
        category: Joi.string(),
    });

    const { error } = schema.validate(req.body);
    if (error) {
        return res.status(400).json({ error: error.details[0].message });
    }

    next();
};
