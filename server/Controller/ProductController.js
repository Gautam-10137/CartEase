const ProductService=require('../services/ProductService');
const  ProductController={
    addProduct: async (req,res)=>{
        try{
            const newProduct=await ProductService.addProduct(req.body);

            res.status(200).json(newProduct);
        }
        catch(error){
            res.status(500).json({error:error.message});
        }
    },
    getProducts: async(req,res)=>{
        try{
             const products= await ProductService.getProducts();
             res.status(200).json(products);
        }
        catch(error){
            res.status(500).json({error:error.message});
        }
    },
    getProduct: async(req,res)=>{
        try{
            const {productID}=req.params;
            const product=await ProductService.getProduct(productID);
            res.status(200).json(product);
        }
        catch(error){
            res.status(500).json({error:error.message});
        }
    }
    
}
module.exports=ProductController;