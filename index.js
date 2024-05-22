const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const userRoutes = require('./routes/user');
const pcpartRoutes = require('./routes/pcparts');
const partsPriceRoutes = require('./routes/partsprices');

const localUri = 'mongodb://127.0.0.1:27017/pcconfigurer';
const uri = 'mongodb+srv://diplomausername:diploma123@cluster0.gy9qitr.mongodb.net/pcconfigurer?retryWrites=true&w=majority'

const app = express();

app.use(cors());
app.use(express.json());

mongoose.connect(uri)
  .then((result) => app.listen(8080))
  .catch((err) => console.log('failed to connect to db'))

app.use(userRoutes);
app.use(pcpartRoutes);
app.use(partsPriceRoutes);