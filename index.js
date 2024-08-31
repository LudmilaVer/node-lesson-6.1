import express from 'express';

const app = express();
const PORT = 3000;

app.get('/', (req, res) => {
    res.send('Сервер Express работает!');
});

app.listen(PORT, () => {
    console.log('Сервер запущен на http://localhost:${PORT}');
});