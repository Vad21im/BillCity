const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const subscriberSchema = mongoose.Schema({
    id: String,
    burn: String,
    code: Number,
    addressStreet: String,
    addressNumberHouse: String,
    addressCorpus: String,
    addressKV: String,
    residentsCount: Number,
    firstName: String,
    lastName: String,
    middleName: String,
    tel: String,
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
