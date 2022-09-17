const mongoose = require('mongoose');

const superheroSchema = new mongoose.Schema({
    id: {
        required: true,
        type: String
    },
    name: String,
    image: {url: String},
    powerstats: {
        intelligence: String,
        strength: String,
        speed: String,
        durability: String,
        power: String,
        combat: String
    }

})

module.exports = mongoose.model('Superhero', superheroSchema)