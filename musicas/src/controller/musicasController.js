const musicas = require('../model/musicas.json');

const getAll = (req, res) => {
    console.log(req.url);

    res.status(200).send(musicas);
}

const getById = (req, res) => {
    const id = req.params.id;

    const musicaFiltrada = musicas.find((musica) => musica.id == id);
    res.send(musicaFiltrada);
}

const getByAnoLancamento = (req, res) => {
    const anoLancamento = req.params.anoLancamento;

    const anoLancamentoFiltrado = musicas.filter((musica) => musica.anoLancamento == anoLancamento);
    res.send(anoLancamentoFiltrado);
}

module.exports = { 
    getAll, 
    getById,
    getByAnoLancamento
}