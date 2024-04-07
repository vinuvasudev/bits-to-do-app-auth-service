const express = require('express');
const bodyParser = require('body-parser');
const authController = require('./src/controllers/authController');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());

// Login route
app.post('/login', authController.login);

// Logout route
app.post('/logout', authController.logout);

// Check token route
app.get('/check-token', authController.checkToken);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
