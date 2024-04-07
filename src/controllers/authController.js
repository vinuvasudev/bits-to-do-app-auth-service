const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const { jwtSecret } = require('../../config');
const User = require('../models/user');

const tokenBlacklist = new Set();

exports.login = async (req, res) => {
    const { username, password } = req.body;

    try {
        const user = await User.findOne({ where: { username } });

        if (!user || !bcrypt.compareSync(password, user.password)) {
            return res.status(401).json({ message: 'Invalid username or password' });
        }

        const token = jwt.sign({ id: user.id }, jwtSecret, { expiresIn: '1h' });
        res.json({ token });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error' });
    }
};

exports.logout = async (req, res) => {
    const token = req.headers.authorization && req.headers.authorization.split(' ')[1];
    if (!token) {
        return res.status(400).json({ message: 'No token provided' });
    }

    tokenBlacklist.add(token); // Add token to blacklist

    res.status(200).json({ message: 'Logout successful' });
};

exports.checkToken = async (req, res) => {
    const token = req.headers.authorization && req.headers.authorization.split(' ')[1];
    if (!token) {
        return res.status(401).json({ message: 'No token provided' });
    }

    if (tokenBlacklist.has(token)) {
        return res.status(401).json({ message: 'Invalid token' });
    }

    try {
        const decoded = jwt.verify(token, jwtSecret);
        res.status(200).json({ message: 'Token is valid', user: decoded });
    } catch (error) {
        console.error(error);
        res.status(401).json({ message: 'Invalid token' });
    }
};
