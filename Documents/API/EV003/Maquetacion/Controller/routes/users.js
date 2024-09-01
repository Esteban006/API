const express = require('express');
const router = express.Router();

let users = [
    { id: 1, username: 'user1', password: 'password1', history: [] },
    { id: 2, username: 'user2', password: 'password2', history: [] },
    // Más usuarios
];

router.post('/register', (req, res) => {
    const newUser = req.body;
    users.push(newUser);
    res.status(201).send('User registered');
});

router.post('/login', (req, res) => {
    const { username, password } = req.body;
    const user = users.find(u => u.username === username && u.password === password);
    if (user) {
        res.status(200).json(user);
    } else {
        res.status(401).send('Invalid credentials');
    }
});

module.exports = router;
