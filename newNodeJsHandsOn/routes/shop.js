const path = require('path');
const express = require('express');
const router = express.Router();
const getProductController = require('../controllers/products'); 

router.get('/', getProductController.getProducts);

module.exports = router;
