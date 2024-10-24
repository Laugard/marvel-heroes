const express = require('express');
const router = express.Router();
const heroController = require('../controllers/heroController');
const heroValidator = require('../validators/heroValidator');

router.post('/', heroValidator, heroController.createHero);
router.put('/:id', heroValidator, heroController.updateHero);

// CRUD ruter
router.get('/', heroController.getAllHeroes);
router.get('/:id', heroController.getHeroById);

router.delete('/:id', heroController.deleteHero);

module.exports = router;
