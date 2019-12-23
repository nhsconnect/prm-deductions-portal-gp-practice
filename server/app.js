import express from 'express';
import path from 'path';
import authRouter from'./auth-router.js';

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

export default app;
