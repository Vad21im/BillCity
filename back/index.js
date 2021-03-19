// const compression = require('compression');
require('dotenv').config();
const express = require('express');
const app = express();
const path = require("path");
const cors = require('cors');
const dbConnect = require('./middlewares/dbConnect');
dbConnect();

const indexRouter = require('./routes/index');
const addSubRouter = require('./routes/addSub')
const addTariffRouter = require('./routes/addTariff');
const PORT = process.env.PORT || 5000;
const fs = require('fs');
const mongoose = require('mongoose');
const Sub = require('./model/subscriber.model')
// app.use(compression());
app.use(cors())

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/', indexRouter);
app.use('/addSub', addSubRouter);
app.use('/addTariff', addTariffRouter);

app.get('/*',(req,res)=>{
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
})

app.listen(PORT, () => {
  console.log('Server Start, PORT: '+PORT);
})
// const newUser = require( './seed')
// newUser();

// Имя,         Фамилия,    Отчество,     Датарождения,   Регион,  Населенныйпункт, Улица,          Дом,                Корпус,         Квартира,   Кол-вочленовсемьи, Alldebt,Fullname,Fulladdress
// firstName,   lastName,   middleName,   burn,           Пропуск, Пропуск,         addressStreet,  addressNumberHouse, addressCorpus,  addressKV,  residentsCount,    Пропуск,Пропуск,Пропуск
//
// const temp = {
//   firstName: 1,
//   lastName: 1,
//   middleName: 1,
//   born: 1,
//   skip: 0,
//   skip_two: 0,
//   addressStreet: 1,
//   addressNumberHouse: 1,
//   addressCorpus: 1,
//   addressKV: 1,
//   residentsCount: 1,
//   skip_three: 0,
//   skip_four: 0,
//   skip_five: 0,
// }
// let fileContent = fs.readFileSync("db.csv", "utf8").split('\n').map(el => el.split(','));
//
// const a = async () => {
//   for (let i=0; i < fileContent.length; i++) {
//     let obj = {};
//     let count = 0;
//     for (let key in temp) {
//       obj[key] = fileContent[i][count];
//       count++;
//     }
//     const newObj = {
//       id: ''+i,
//       code: 0,
//       born: obj.born ?? '',
//       addressStreet: obj.addressStreet ?? '',
//       addressNumberHouse: obj.addressNumberHouse ?? '',
//       addressCorpus: obj.addressCorpus ?? '',
//       addressKV: obj.addressKV ?? '',
//       residentsCount:  obj.redirectCount ?? 0,
//       firstName: obj.firstName ?? '',
//       lastName: obj.lastName ?? '',
//       middleName: obj.middleName ?? '',
//       tel: '',
//       balance: 0,
//       houseArea: 0,
//       housingType: '',
//       territoryType: '',
//       geoPosition: '',
//       operation: [],
//       waterMeter: 0,
//       tariffs: [],
//     }
//     const sub = await new Sub(newObj);
//     sub.save(function(err){
//     if(err) process.exit();
//     console.log("Сохранен объект", sub.id);
// });
//   }
// }

// a();

// const sub = await new Sub({
//   id: (await Sub.count()) + 1,
//   code: '',
//   born: '',
//   addressStreet: req.body.addressStreet,
//   addressNumberHouse: req.body.addressNumberHouse,
//   addressCorpus: req.body.addressCorpus,
//   addressKV: req.body.addressKV,
//   residentsCount:  req.body.residentsCount,
//   firstName: req.body.firstName,
//   lastName: req.body.lastName,
//   middleName: req.body.middleName,
//   tel: req.body.tel,
//   balance: req.body.balance,
//   houseArea: req.body.houseArea,
//   housingType: req.body.housingType,
//   territoryType: req.body.territoryType,
//   geoPosition: req.body.geoPosition,
//   operation: [],
//   waterMeter: req.body.waterMeter,
//   tariffs: req.body.tariffs
//
// });
// sub.save(function(err){
//   if(err) return console.log(err);
//   console.log("Сохранен объект", sub);
// });
