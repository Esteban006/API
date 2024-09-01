const express = require('express');
const router = express.Router();

let orders = [];

// Crear un pedido
router.post('/', (req, res) => {
    const order = req.body;
    orders.push(order);
    res.status(201).send('Order placed');
});

// Obtener todos los pedidos
router.get('/', (req, res) => {
    res.json(orders);
});

// Obtener pedido por ID
router.get('/:id', (req, res) => {
    const order = orders.find(o => o.id === parseInt(req.params.id));
    if (!order) return res.status(404).send('Order not found');
    res.json(order);
});

module.exports = router;
