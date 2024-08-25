// server.js
const express = require('express');
const authRoutes = require('./Index');
require('dotenv').config();

const app = express();

// Middleware para parsear JSON
app.use(express.json());

// Rutas de autenticación
app.use('/Index', Index);

// Iniciar el servidor
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto ${PORT}`);
});
