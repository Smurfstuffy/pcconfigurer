const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const userRoutes = require('./routes/user');
const processorRoutes = require('./routes/processor')

const app = express();

app.use(cors());
app.use(express.json());

mongoose.connect('mongodb://127.0.0.1:27017/pcconfigurer')
  .then((result) => app.listen(8080))
  .catch((err) => console.log('failed to connect to db'))

app.use(userRoutes);
app.use(processorRoutes);