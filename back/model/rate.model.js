const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const rateSchema = mongoose.Schema({
    id: String,
    name: String,
    moneyMode: String,
    price: Object
}, {timestamps: {}})

module.exports = mongoose.model('Rate', rateSchema);
