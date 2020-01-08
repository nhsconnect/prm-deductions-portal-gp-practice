const express = require('express');
const path = require('path');
const authRouter = require('./auth-router.js');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}))

app.use('/authRouter', authRouter);

app.get(['/home', '/status', '/auth'], (req, res) => {
    res.sendFile(path.join(__dirname + '/../build/index.html'));
});

app.use(express.static(path.join(__dirname + '/../build')));

module.exports = app;
