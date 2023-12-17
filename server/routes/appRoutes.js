const express=require('express');
const router=express.Router();
const authRoutes=require('./authRoutes')

router.post('/auth',authRoutes);


module.exports= router;