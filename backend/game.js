const mongoose = require('mongoose');

const gameSchema = new mongoose.Schema({
    name: {type: String, default: ""},
    priority: {type: Number, default: 10 },
    completed: {type: Boolean, default: false},
    in_progress: {type: Boolean, default: false},
    image_url: {type: String, default: ""},
    review_score: {type: Number, default: 0},
    average_hours: {type: Number, default: 0},
    web_link: {type: String, default: ""},
    game_type: {type: String, default: ""},
    date_added: {type: String, default: ""} //this somehow works better than date...
})

const Game = mongoose.model('Game', gameSchema);

module.exports = Game;