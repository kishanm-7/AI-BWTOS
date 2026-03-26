const express = require('express');
const router = express.Router();
const productsData = require('../seedData');

// Ensure IDs exist for the React frontend mapping
productsData.forEach((p, i) => p._id = (i + 1).toString());

router.get('/', (req, res) => {
  let { category, brand, maxPrice } = req.query;
  let results = [...productsData];
  if (category && category.toLowerCase() !== 'all') {
    results = results.filter(p => p.category && p.category.toLowerCase() === category.toLowerCase());
  }
  if (brand && brand.toLowerCase() !== 'all') {
    results = results.filter(p => p.brand && p.brand.toLowerCase() === brand.toLowerCase());
  }
  if (maxPrice) {
    results = results.filter(p => p.price <= Number(maxPrice));
  }
  
  res.json(results);
});

router.get('/:id', (req, res) => {
  const product = productsData.find(p => p._id === req.params.id);
  if (product) return res.json(product);
  res.status(404).json({ message: 'Product not found' });
});

module.exports = router;
