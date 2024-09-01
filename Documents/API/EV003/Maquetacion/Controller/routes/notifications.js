const express = require('express');
const router = express.Router();

let registeredDevices = [];

router.post('/register', (req, res) => {
    const deviceToken = req.body.token;
    if (!registeredDevices.includes(deviceToken)) {
        registeredDevices.push(deviceToken);
        res.status(201).send('Device registered for notifications');
    } else {
        res.status(200).send('Device already registered');
    }
});

router.post('/send', (req, res) => {
    const notification = req.body.notification;
    // Lógica para enviar notificaciones a los dispositivos registrados
    res.status(200).send('Notification sent');
});

module.exports = router;
