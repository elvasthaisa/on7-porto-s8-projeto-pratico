const express = require('express');
const router = express.Router();
const controller = require('../controller/musicasController');
const index = require('../route/index');

router.get('/', index);
router.get('/musicas', controller.getAll);
router.get('/musicas/:id', controller.getById);
router.get('/musicas/anoLancamento/:anoLancamento', controller.getByAnoLancamento);

module.exports = router;