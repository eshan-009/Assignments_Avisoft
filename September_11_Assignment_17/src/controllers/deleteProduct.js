const Product = require("../models/Product");

async function deleteProduct(req,res) {
   try{
    const {id} = req.params;

    await Product.findByIdAndDelete({_id:id})

    return res.status(200).json({
        message: " Product Deleted Successfully"
    })
   }
   catch (err)
   {
    return res.status(500).json({
        message:"Error Deleting Poduct",
        error : err
    })
   }
}

module.exports = {deleteProduct}