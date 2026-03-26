const express = require('express');
const router = express.Router();

let users = [];

router.post('/register', (req, res) => {
  const { name, email, password } = req.body;
  if(users.find(u => u.email === email)) return res.status(400).json({message: 'User already exists'});
  users.push({ _id: Date.now().toString(), name, email, password });
  res.status(201).json({
    _id: Date.now().toString(),
    name, email, token: 'fake-jwt-token-' + email
  });
});

router.post('/login', (req, res) => {
  const { email, password } = req.body;
  const user = users.find(u => u.email === email && u.password === password);
  if (user) {
    res.json({
      _id: user._id, name: user.name, email: user.email, token: 'fake-jwt-token-' + email
    });
  } else {
    res.status(401).json({ message: 'Invalid email or password' });
  }
});

module.exports = router;
