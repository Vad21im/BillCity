const express = require('express');
const router = express.Router();

router.route('/')
    .post((req, res) => {
        console.log(req.connection.remoteAddress)
        console.log(req.body)
        res.status(200).send(JSON.stringify({title: 'CMC'}))

    });


module.exports = router;
