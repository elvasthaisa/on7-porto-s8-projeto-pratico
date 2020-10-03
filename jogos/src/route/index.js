const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.send({
        titulo: "Alguns dos meus jogos prediletos durante a infância"
    });
})

module.exports = router;