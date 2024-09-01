const express = require('express');
const router = express.Router();

// Datos simulados
const products = [
    { id: 1, name: 'T-shirt', price: 20, description: 'A comfortable cotton t-shirt' },
    { id: 2, name: 'Jeans', price: 40, description: 'Stylish denim jeans' },
    // ...otros productos
];

// Obtener todos los productos
router.get('/', (req, res) => {
    res.json(products);
});

// Obtener producto por ID
router.get('/:id', (req, res) => {
    const product = products.find(p => p.id === parseInt(req.params.id));
    if (!product) return res.status(404).send('Product not found');
    res.json(product);
});

module.exports = router;
