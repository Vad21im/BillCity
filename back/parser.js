// const newUser = require( './seed')
// newUser();
//
// Имя,         Фамилия,    Отчество,     Датарождения,   Регион,  Населенныйпункт, Улица,          Дом,                Корпус,         Квартира,   Кол-вочленовсемьи, Alldebt,Fullname,Fulladdress
// firstName,   lastName,   middleName,   burn,           Пропуск, Пропуск,         addressStreet,  addressNumberHouse, addressCorpus,  addressKV,  residentsCount,    Пропуск,Пропуск,Пропуск
const fs = require('fs');
const Sub = require('./model/subscriber.model');


const a = async () => {
  const temp = {
    firstName: 1,
    lastName: 1,
    middleName: 1,
    born: 1,
    skip: 0,
    skip_two: 0,
    addressStreet: 1,
    addressNumberHouse: 1,
    addressCorpus: 1,
    addressKV: 1,
    residentsCount: 1,
    skip_three: 0,
    skip_four: 0,
    skip_five: 0,
  }
  let fileContent = fs.readFileSync("db.csv", "utf8").split('\n').map(el => el.split(','));

  for (let i=0; i < fileContent.length; i++) {
    console.log(i)
    let obj = {};
    let count = 0;
    for (let key in temp) {
      obj[key] = fileContent[i][count];
      count++;
    }
    const newObj = {
      id: ''+i,
      code: 0,
      born: obj.born ?? '',
      addressStreet: obj.addressStreet ?? '',
      addressNumberHouse: obj.addressNumberHouse ?? '',
      addressCorpus: obj.addressCorpus ?? '',
      addressKV: obj.addressKV ?? '',
      residentsCount:  obj.redirectCount ?? 0,
      firstName: obj.firstName ?? '',
      lastName: obj.lastName ?? '',
      middleName: obj.middleName ?? '',
      tel: '',
      balance: 0,
      houseArea: 0,
      housingType: '',
      territoryType: '',
      geoPosition: '',
      operation: [],
      waterMeter: 0,
      tariffs: [],
    }
    await new Sub(newObj).save();
  }
}

module.exports = a;

// const sub = await new Sub({
//   id: (await Sub.count()) + 1,
//   code: '',
//   born: '',
//   addressStreet: req.body.addressStreet,
//   addressNumberHouse: req.body.addressNumberHouse,
//   addressCorpus: req.body.addressCorpus,
//   addressKV: req.body.addressKV,
//   residentsCount: req.body.residentsCount,
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
// });
//
// sub.save(function(err){
//   if(err) return console.log(err);
//   console.log("Сохранен объект", sub);
// });
