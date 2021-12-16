const express = require('express');
const productController = require('../controllers/productController.js');

const productRouter = express.Router();

productRouter.get('/', productController.getProduct);
productRouter.post('/', productController.addProduct);

module.exports = productRouter;