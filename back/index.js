// const compression = require('compression');
require('dotenv').config();
const express = require('express');
const app = express();
const path = require("path");
const cors = require('cors');
const dbConnect = require('./middlewares/dbConnect');
dbConnect();
// const a = require('./parser');

const indexRouter = require('./routes/index');
const addSubRouter = require('./routes/addSub')
const addTariffRouter = require('./routes/addTariff');
const getSub = require('./routes/getSub')

const PORT = process.env.PORT || 5000;
const fs = require('fs');
const mongoose = require('mongoose');
const Sub = require('./model/subscriber.model');

// app.use(compression());
app.use(cors())

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/', indexRouter);
app.use('/addSub', addSubRouter);
app.use('/addTariff', addTariffRouter);
app.use('/getSub', getSub)

app.get('/*',(req,res)=>{
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
})

app.listen(PORT, () => {
  console.log('Server Start, PORT: '+PORT);
})

