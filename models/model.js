const mongoose = require('mongoose');

const dataSchema = new mongoose.Schema({
    name: {
        required: true,
        type: String
    },
    age: {
        required: true,
        type: Number
    },
    nc: {
        required: false,
        type: String
    },
    hacks: {
        required: false,
        type: Number
    },
    status: {
        required: false,
        type: Number
    },
    pasword: {
        required: false,
        type: String
    },
    inicio: {
        required: false,
        type: String
    },
    fin: {
        required: false,
        type: String
    },


})

module.exports = mongoose.model('Data', dataSchema)