const mongoose = require('mongoose');

const gameSchema = new mongoose.Schema({
    name: String,
    priority: Number,
    completed: Boolean,
    image_url: String,
    review_score: Number,
    average_hours: Number,
    web_link: String,
    game_type: String,
    date_added: String //this somehow works better than date...
})

const Game = mongoose.model('Game', gameSchema);

module.exports = Game;