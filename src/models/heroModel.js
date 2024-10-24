const fs = require('fs');
const path = require('path');
const dataPath = path.join(__dirname, '../../heroes.json');

// Læs helte fra JSON-filen
const getAllHeroes = () => {
    const heroes = JSON.parse(fs.readFileSync(dataPath, 'utf8'));
    return heroes;
};

// Skriv data til JSON-filen
const saveHeroes = (heroes) => {
    fs.writeFileSync(dataPath, JSON.stringify(heroes, null, 2), 'utf8');
};

module.exports = {
    getAllHeroes,
    getHeroById: (id) => getAllHeroes().find(hero => hero.id === id),
    createHero: (hero) => {
        const heroes = getAllHeroes();
        hero.id = heroes.length ? heroes[heroes.length - 1].id + 1 : 1;
        heroes.push(hero);
        saveHeroes(heroes);
        return hero;
    },
    updateHero: (id, updatedHero) => {
        const heroes = getAllHeroes();
        const index = heroes.findIndex(hero => hero.id === id);
        if (index !== -1) {
            heroes[index] = { ...heroes[index], ...updatedHero };
            saveHeroes(heroes);
            return heroes[index];
        }
        return null;
    },
    deleteHero: (id) => {
        const heroes = getAllHeroes();
        const index = heroes.findIndex(hero => hero.id === id);
        if (index !== -1) {
            const deletedHero = heroes.splice(index, 1);
            saveHeroes(heroes);
            return deletedHero;
        }
        return null;
    }
};
