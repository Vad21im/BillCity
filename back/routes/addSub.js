const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const Sub = require('../model/subscriber.model')
router.route('/')
    // .post((req, res) => {
    //     console.log(req.connection.remoteAddress)
    //     console.log(req.body)
    //
    //     res.status(200).send(JSON.stringify({title: 'CMC'}))
    //
    // });
    //
    .post( async (req,res)=> {
        console.log(req.body)
        const sub = await new Sub({
            id: (await Sub.count()) + 1,
            code: req.body.code,
            addressStreet: req.body.addressStreet,
            addressNumberHouse: req.body.addressNumberHouse,
            addressCorpus: req.body.addressCorpus,
            addressKV: req.body.addressKV,
            residentsCount:  req.body.residentsCount,
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            middleName: req.body.middleName,
            tel: req.body.tel,
            balance: req.body.balance,
            houseArea: req.body.houseArea,
            housingType: req.body.housingType,
            territoryType: req.body.territoryType,
            geoPosition: req.body.geoPosition,
            operation: [],
            waterMeter: req.body.waterMeter,
            tariffs: req.body.tariffs,
            born: req.body.born
        });
        sub.save(function(err){
            if(err) return console.log(err);
            console.log("Сохранен объект", sub);
        });
        res.status(200).send(JSON.stringify({status: true}))
    })
module.exports = router;
