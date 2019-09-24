const express= require('express');
const router = express.Router();

router.get('/',(req, res, next) => {
    res.status(200).json({
        message:'Handling GET request to /products'
    });
});

router.get('/:productId',(req, res, next) => {
   const productId= req.params.productId;
   console.log("Product Id: "+productId);
   if(productId === 'special'){
        res.status(200).json({
            message:'You have sent special id',
            id:productId
        });
   }else{
    res.status(200).json({
        message:'You have sent a number',
        id:productId
    });
   }
});


router.delete('/:productId',(req, res, next) => {
    const productId= req.params.productId;
    console.log("Product Id: "+productId);
         res.status(200).json({
             message:'Id has been deleted',
             id:productId
         });
    
 });

router.post('/',(req, res, next) => {
    res.status(200).json({
        message:'Handling POST request to /products'
    });
});

module.exports=router;