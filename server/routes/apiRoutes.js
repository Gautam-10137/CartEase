const express=require('express');
const router=express.Router();
const authRoutes=require('./authRoutes');
const ProductController = require('../Controller/ProductController');

router.use('/auth',authRoutes);
router.post('/product/add',ProductController.addProduct);
router.get('/product/all',ProductController.getProducts);
router.get('/product/:productID',ProductController.getProduct);

module.exports= router;