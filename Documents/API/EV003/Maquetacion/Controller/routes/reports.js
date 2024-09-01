const express = require('express');
const router = express.Router();

let salesReports = [
    { month: 'January', sales: 5000, topProduct: 'T-shirt' },
    { month: 'February', sales: 8000, topProduct: 'Jeans' },
    // Más informes
];

router.get('/sales', (req, res) => {
    res.json(salesReports);
});

module.exports = router;
