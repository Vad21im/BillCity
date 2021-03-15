// const compression = require('compression');
require('dotenv').config();
const express = require('express');
const app = express();
const path = require("path");
const cors = require('cors');
const dbConnect = require('./middlewares/dbConnect');
dbConnect();
const indexRouter = require('./routes/index');
const PORT = process.env.PORT || 5000;

// app.use(compression());
app.use(cors())

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/', indexRouter);

app.get('/*',(req,res)=>{
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
})

app.listen(PORT, () => {
  console.log('Server Start, PORT: '+PORT);
})
// const newUser = require( './seed')
// newUser();
