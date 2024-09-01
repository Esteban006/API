const express = require('express');
const bodyParser = require('body-parser');


const cors = require('cors');

const chatRoute = require('./routes/chat');
const fashionRoute = require('./routes/fashion');
const notificationsRoute = require('./routes/notifications');
const socialRoute = require('./routes/social');
const inventoryRoute = require('./routes/inventor');
const shippingRoute = require('./routes/shipping');
const usersRoute = require('./routes/users');
const reportsRoute = require('./routes/reports');

const app = express();
app.use(cors());
app.use(bodyParser.json());

app.use('/api/chat', chatRoute);
app.use('/api/fashion', fashionRoute);
app.use('/api/notifications', notificationsRoute);
app.use('/api/social', socialRoute);
app.use('/api/inventory', inventoryRoute);
app.use('/api/shipping', shippingRoute);
app.use('/api/users', usersRoute);
app.use('/api/reports', reportsRoute);

app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});
