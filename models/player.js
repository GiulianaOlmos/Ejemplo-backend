const mongoose = require('mongoose');

let Schema = mongoose.Schema

let player = new Schema({
    playerName: {
        type: String,
        required: [true, 'playerName is required']
    },
    team: {
        type: String,
        required: false,
    }, 
    score: {
        type: Number, 
        required: false
    }
})

module.exports = mongoose.model('Player', player)