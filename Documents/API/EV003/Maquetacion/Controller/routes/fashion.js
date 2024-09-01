const express = require('express');
const router = express.Router();

const fashionAdvice = [
    { id: 1, user: 'User1', advice: 'Try pairing a white shirt with dark jeans for a classic look.' },
    { id: 2, user: 'User2', advice: 'Accessorize your outfit with a bold statement necklace.' },
    // Más consejos de moda
];

router.get('/advice', (req, res) => {
    res.json(fashionAdvice);
});

router.post('/advice', (req, res) => {
    const newAdvice = req.body;
    fashionAdvice.push(newAdvice);
    res.status(201).send('New fashion advice added');
});

module.exports = router;
