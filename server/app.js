const express = require('express');
const path = require('path');
const authRouter = require('./auth-router.js');

const app = express();

app.use('/authRouter', authRouter);

app.get(['/home', '/status', '/auth'], (req, res) => {
    res.sendFile(path.join(__dirname + '/../build/index.html'));
});

app.use(express.static(path.join(__dirname + '/../build')));

module.exports = app;
