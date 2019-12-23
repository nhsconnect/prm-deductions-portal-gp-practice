const express = require('express');
const path = require('path');
const authRouter = require('./auth-router.js');

const app = express();

app.get('/user', (req, res) => {
    const user = {name: 'wendy', nhsnum: '38373723', age: '42342387'};
    res.status(200).send(user);
});

app.use('/auth', authRouter);

app.get(['/home', '/status'], (req, res) => {
    res.sendFile(path.join(__dirname + '/../build/index.html'));
});

app.use(express.static(path.join(__dirname + '/../build')));

module.exports = app;
