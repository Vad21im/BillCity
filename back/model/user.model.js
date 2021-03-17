const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    id: String,
    name: Object,
    tel: String
}, {timestamps: {}})

module.exports = mongoose.model('User', userSchema);