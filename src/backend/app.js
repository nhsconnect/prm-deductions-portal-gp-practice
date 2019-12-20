const authRouter = require('./auth-router.js');
const express = require ('express');
const app = express();
const path = require('path');

app.get('/user', (req, res) => {
  const user = {name: 'wendy', nhsnum: '38373723', age: '42342387'};
  res.status(200).send(user)
});

app.use('/auth', authRouter);

app.get(['/home', '/status'], (req, res) => res.sendFile(path.join(__dirname+'/build/index.html')));
app.use(express.static(path.join(__dirname+'/build')));
app.listen(5000);

module.exports = app;
