const express = require('express');
const router = express.Router();

let shippingOptions = [
    { id: 1, type: 'Standard', cost: 5, estimatedDelivery: '5-7 business days' },
    { id: 2, type: 'Express', cost: 15, estimatedDelivery: '1-2 business days' },
    // Más opciones de envío
];

router.get('/options', (req, res) => {
    res.json(shippingOptions);
});

router.post('/order', (req, res) => {
    const order = req.body;
    // Lógica para procesar el pedido y seleccionar la opción de envío
    res.status(201).send('Order placed with shipping');
});

module.exports = router;
