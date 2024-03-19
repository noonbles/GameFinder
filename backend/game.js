const mongoose = require('mongoose');

const gameSchema = new mongoose.Schema({
    name: String,
    priority: Number,
})

const Game = mongoose.model('Game', gameSchema);

module.exports = Game;