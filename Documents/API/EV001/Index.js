// routes/auth.js
const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const db = require('../db');
require('dotenv').config();

const router = express.Router();

// Ruta para registro de usuarios
router.post('/register', async (req, res) => {
    const { username, password } = req.body;

    try {
        // Verificar si el usuario ya existe
        const [user] = await db.query('SELECT * FROM users WHERE username = ?', [username]);
        if (user.length > 0) {
            return res.status(400).json({ msg: 'El usuario ya existe' });
        }

        // Encriptar la contraseña
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        // Crear un nuevo usuario
        await db.query('INSERT INTO users (username, password) VALUES (?, ?)', [username, hashedPassword]);

        res.status(201).json({ msg: 'Registro exitoso' });
    } catch (error) {
        console.error('Error en el registro:', error.message);
        res.status(500).send('Error en el servidor');
    }
});

// Ruta para inicio de sesión de usuarios
router.post('/login', async (req, res) => {
    const { username, password } = req.body;

    try {
        // Verificar si el usuario existe
        const [user] = await db.query('SELECT * FROM users WHERE username = ?', [username]);
        if (user.length === 0) {
            return res.status(400).json({ msg: 'Credenciales inválidas' });
        }

        // Verificar la contraseña
        const isMatch = await bcrypt.compare(password, user[0].password);
        if (!isMatch) {
            return res.status(400).json({ msg: 'Credenciales inválidas' });
        }

        // Crear y devolver un token JWT
        const payload = { userId: user[0].id };
        const token = jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: '1h' });

        res.json({ msg: 'Autenticación satisfactoria', token });
    } catch (error) {
        console.error('Error en el inicio de sesión:', error.message);
        res.status(500).send('Error en el servidor');
    }
});

module.exports = router;
