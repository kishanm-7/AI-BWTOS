require('dotenv').config();
const mongoose = require('mongoose');
const Product = require('./models/Product');

const products = [
  {
    name: 'Wireless Audio & Watch Bundle',
    description: 'Elevate your daily rhythm with our premium wireless headphones, sleek true-wireless earbuds, and advanced fitness tracking smartwatch. Designed for seamless connectivity.',
    price: 699,
    discount: 10,
    category: 'Accessories',
    brand: 'TechPro',
    images: ['/images/1.jpeg', '/images/2.jpeg'],
    ratings: { average: 4.8, count: 124 },
    specs: { ram: 'N/A', storage: 'N/A', battery: 'Up to 40 Hours', other: 'Bluetooth 5.3' },
    reviews: [{ user: 'Alex', rating: 5, comment: 'Incredible bundle!' }]
  },
  {
    name: 'Premium Gadget Collection',
    description: 'The ultimate power user setup featuring our latest smartphone, connected watch, and noise-cancelling headphones.',
    price: 1299,
    discount: 15,
    category: 'Accessories',
    brand: 'TechPro',
    images: ['/images/2.jpeg'],
    ratings: { average: 4.9, count: 89 },
    specs: { ram: '8GB', storage: '256GB', battery: 'All day battery', other: 'Fast charging' },
    reviews: []
  },
  {
    name: 'Vlogger Tech Kit',
    description: 'Everything you need to start creating: High-end smartphone, quality headphones, smart tracking watch, and an extendable tripod.',
    price: 899,
    discount: 5,
    category: 'Accessories',
    brand: 'CreatorGear',
    images: ['/images/3.jpeg'],
    ratings: { average: 4.7, count: 56 },
    specs: { ram: '8GB', storage: '128GB', battery: '4000mAh', other: 'Includes tripod' },
    reviews: []
  },
  {
    name: 'Smart LED Wall Panels',
    description: 'Transform your space with these beautiful, customizable RGB LED wall panels. Syncs with music and screens.',
    price: 199,
    discount: 0,
    category: 'Smart Home',
    brand: 'Lumina',
    images: ['/images/4.jpeg'],
    ratings: { average: 4.5, count: 210 },
    specs: { ram: 'N/A', storage: 'N/A', battery: 'AC Powered', other: '16M colors, WiFi' },
    reviews: []
  },
  {
    name: 'Next-Gen Tech Bundle',
    description: 'Step into the future with a foldable tablet, VR/AR glasses, and a compact camera drone.',
    price: 2499,
    discount: 20,
    category: 'Smartphones',
    brand: 'FutureTech',
    images: ['/images/5.jpeg'],
    ratings: { average: 4.9, count: 12 },
    specs: { ram: '16GB', storage: '1TB', battery: '10000mAh', other: 'Drone included' },
    reviews: []
  },
  {
    name: 'Matte Black Essentials',
    description: 'For those who appreciate the murdered-out look. Desktop essentials including controller, camera, and smartwatch.',
    price: 499,
    discount: 0,
    category: 'Accessories',
    brand: 'Noir',
    images: ['/images/6.jpeg'],
    ratings: { average: 4.6, count: 45 },
    specs: { ram: 'N/A', storage: 'N/A', battery: 'Various', other: 'Matte black finish' },
    reviews: []
  }
];

mongoose.connect(process.env.MONGO_URI || 'mongodb://127.0.0.1:27017/techgadgets')
  .then(async () => {
    console.log('MongoDB connected for seeding');
    await Product.deleteMany({});
    await Product.insertMany(products);
    console.log('Database seeded!');
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
