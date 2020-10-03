const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.send({
        titulo: "Algumas das minhas músicas antigas prediletas"
    });
})

module.exports = router;