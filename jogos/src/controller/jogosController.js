const jogos = require('../model/jogos.json');

const getAll = (req, res) => {
    console.log(req.url);

    res.status(200).send(jogos);
}

const getById = (req, res) => {
    const id = req.params.id;

    const jogoFiltrado = jogos.find((jogo) => jogo.id == id);
    res.send(jogoFiltrado);
}

const getByPublicadora = (req, res) => {
    const publicadora = req.params.publicadora;

    const publicadoraFiltrada = jogos.filter((jogo) => jogo.publicadora == publicadora);
    res.send(publicadoraFiltrada);
}

module.exports = { 
    getAll, 
    getById,
    getByPublicadora
}