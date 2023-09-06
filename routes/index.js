const express = require('express');
const authControllers = require('../controllers/authControllers');

const router = express.Router();

//Testing route
router.get('/test', (req, res) => res.json({ msg: 'Hello World!' }));

// Auth Routes

router.get('/login', authControllers.login);
router.post('/register', authControllers.register);

module.exports = router;
