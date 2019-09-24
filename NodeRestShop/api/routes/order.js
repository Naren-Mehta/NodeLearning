const express= require('express');

const router= express.Router();

router.get('/',(req, res, next) => {
    res.status(200).json({
        message:'List of all orders'
    });
});

router.get('/:orderId',(req, res, next) => {
    const orderId= req.params.orderId;
    res.status(200).json({
        message:'Selected Order Id is :'+orderId
    });
});

router.delete('/:orderId',(req, res, next) => {
    const orderId= req.params.orderId;
    res.status(200).json({
        message:'Selected Order Id  :'+orderId + ' is deleted'
    });
});

module.exports=router;


