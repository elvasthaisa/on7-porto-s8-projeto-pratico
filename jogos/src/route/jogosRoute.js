const express = require('express');
const router = express.Router();
const controller = require('../controller/jogosController');
const index = require('../route/index');

router.get('/', index);
router.get('/jogos', controller.getAll);
router.get('/jogos/:id', controller.getById);
router.get('/jogos/publicadora/:publicadora', controller.getById);

module.exports = router;