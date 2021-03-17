const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const subscriberSchema = mongoose.Schema({
    id: String,
    address: Object,
    residents: Array,
    owner: [{type: Schema.Types.ObjectId, ref: "User"}],
    balance: Number,
    houseArea: Number,
    housingType: String,
    territoryType: String,
    geoPosition: String,
    operation: Array,
    waterMeter: Number,
    tariffs: Array
}, {timestamps: {}})

module.exports = mongoose.model('Subscriber', subscriberSchema);
