const express = require('express');
const router = express.Router();

let orders = [];

router.post('/', (req, res) => {
  const order = { _id: Date.now().toString(), ...req.body, user: 'fake-user-id' };
  orders.push(order);
  res.status(201).json(order);
});

router.get('/myorders', (req, res) => {
  res.json(orders);
});

module.exports = router;
