const express = require('express');
const router = express.Router();

let cart = [];

// Agregar producto al carrito
router.post('/', (req, res) => {
    const product = req.body;
    cart.push(product);
    res.status(201).send('Product added to cart');
});

// Obtener productos en el carrito
router.get('/', (req, res) => {
    res.json(cart);
});

// Eliminar producto del carrito
router.delete('/:id', (req, res) => {
    const productId = parseInt(req.params.id);
    cart = cart.filter(p => p.id !== productId);
    res.send('Product removed from cart');
});

module.exports = router;
