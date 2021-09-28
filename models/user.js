const mongoose = require('mongoose');

let Schema = mongoose.Schema

let user = new Schema({
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

module.exports = mongoose.model('User', user)