const express = require('express');
const router = express.Router();

let inventory = [
    { id: 1, name: 'T-shirt', stock: 100 },
    { id: 2, name: 'Jeans', stock: 50 },
    // Más productos
];

router.get('/', (req, res) => {
    res.json(inventory);
});

router.post('/update', (req, res) => {
    const { id, stock } = req.body;
    const product = inventory.find(p => p.id === id);
    if (product) {
        product.stock = stock;
        res.status(200).send('Inventory updated');
    } else {
        res.status(404).send('Product not found');
    }
});

module.exports = router;
