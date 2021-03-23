const express = require('express');
const router = express.Router();
const mongoose = require('mongoose')
const Sub = require('../model/subscriber.model')

router.route('/')
    .post(async (req, res) => {
        console.log(req.body)
        // res.status(200).send(JSON.stringify({title: 'CMC'}))
        // const subs = await Sub.find().where().slice(5);
        const subs = await Sub.find().limit(req.body.limit).skip(req.body.position*req.body.limit)
        const subsLimit = await Sub.count()
        res.status(200).json({subsLimit, subs})
        console.log(subs)

    });


module.exports = router;
