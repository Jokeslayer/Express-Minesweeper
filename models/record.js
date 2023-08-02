const mongoose = require('mongoose');
// optional shortcut to the mongoose.Schema class
const Schema = mongoose.Schema;

const recordSchema = new Schema({
    score: {
        type: number,
        required: true
    },
    player: {
        type: String
    },
    gameDate: {
        type: Date
    }
}, {
    timestamps: true
});