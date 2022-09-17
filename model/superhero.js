const mongoose = require('mongoose');

const superheroSchema = new mongoose.Schema({
    id: {
        required: true,
        type: Number
    },
    name: String,
    image: {url: String},
    powerstats: {
        intelligence: Number,
        strength: Number,
        speed: Number,
        durability: Number,
        power: Number,
        combat: Number
    }

})

module.exports = mongoose.model('Superhero', superheroSchema)