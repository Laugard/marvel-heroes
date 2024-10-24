const Joi = require('joi');

const heroSchema = Joi.object({
    name: Joi.string().min(3).required(),
    alias: Joi.string().min(3).required(),
    powers: Joi.array().items(Joi.string()).required()
});

module.exports = (req, res, next) => {
    const { error } = heroSchema.validate(req.body);
    if (error) {
        return res.status(400).json({ message: error.details[0].message });
    }
    next();
};
