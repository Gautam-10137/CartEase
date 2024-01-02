const Product=require('../model/Product');
const PollService={
    addProduct: async(productData)=>{
         const {name,price,description,imageUrl,user}=productData;
         const newProduct=new Product(
            {
                name:name,
                price:price,
                description:description,
                imageUrl:imageUrl,
                user:user
            }
            );
         newProduct.save();
         return newProduct;
    },
    getProducts: async()=>{
        try{
            const products= Product.find().populate('user');
            return products;
        }
        catch(error){
            console.log("Error getting products");
        }
    },
    getProduct: async(productID)=>{
        try{ 
            
             const product=Product.findById(productID).populate('user');
             return product;
        }
        catch(error){
            console.error(error);
            throw new Error('Failed to fetch product data');
        }
    }
}

module.exports=PollService;