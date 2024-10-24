const heroModel = require('../models/heroModel');

exports.getAllHeroes = (req, res) => {
    res.json(heroModel.getAllHeroes());
};

exports.getHeroById = (req, res) => {
    const hero = heroModel.getHeroById(parseInt(req.params.id));
    if (hero) {
        res.json(hero);
    } else {
        res.status(404).json({ message: 'Hero not found' });
    }
};

exports.createHero = (req, res) => {
    const newHero = heroModel.createHero(req.body);
    res.status(201).json(newHero);
};

exports.updateHero = (req, res) => {
    const updatedHero = heroModel.updateHero(parseInt(req.params.id), req.body);
    if (updatedHero) {
        res.json(updatedHero);
    } else {
        res.status(404).json({ message: 'Hero not found' });
    }
};

exports.deleteHero = (req, res) => {
    const deletedHero = heroModel.deleteHero(parseInt(req.params.id));
    if (deletedHero) {
        res.json(deletedHero);
    } else {
        res.status(404).json({ message: 'Hero not found' });
    }
};
