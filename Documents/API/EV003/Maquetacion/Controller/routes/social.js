const express = require('express');
const router = express.Router();

router.post('/share', (req, res) => {
    const { design, platform } = req.body;
    // Lógica para compartir en redes sociales utilizando las APIs de plataformas como Facebook o Twitter
    res.status(200).send(`Design shared on ${platform}`);
});

module.exports = router;
