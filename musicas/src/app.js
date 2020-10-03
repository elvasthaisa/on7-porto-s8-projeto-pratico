const express = require('express');
const app = express();

// Importando arquivos de rota
const index = require('./route/index');
const musicas = require('./route/musicasRoute');

app.use(express.static('public'));

app.use((req, res, next) => {
    console.log('Nova requisição realizada');

    next();
})

app.use('/', musicas);

app.get('*', (req, res) => {
    res.status(404).sendFile('./views/404.html', { root: __dirname })
})

module.exports = app;