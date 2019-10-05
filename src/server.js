const express = require('express');
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/omni', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});


const routes = require('./routes');
const app = express();

app.use(express.json());
app.use(routes);

console.log('server listen to: 3333');
app.listen('3333');