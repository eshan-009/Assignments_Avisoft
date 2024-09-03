const { Catalogue } = require("../Data/data");
const { v4: uuidv4 } = require('uuid');
class Product{
 
    constructor(id,name,description,price,instock){
    this.id  =id,
    this.name = name,
    this.description = description,
    this.price = price,
    this.instock = instock

    }
    addProduct(data){
        Catalogue.push(data);
        return true
    }

}

async function getProduct(req,res) {
  
    try{
        const {id} = req.params;
    if(id)
    {
        const data = Catalogue.find((item)=>item.id===id)
        if(data)
        {
            return res.status(200).json({
                message:"Data Fetched Successfully!!!",
                data:data
            })
        }
        else
        {
            return res.status(400).json({
                message:"Could Not find Data with given ID!!!",
                
            })
        }
    }
    else
    {
        return res.status(200).json({
            data : Catalogue
        })
    }
    } catch (err){
        return res.status(500).json({
            message : "Error Fetching Data correctly"
        })
    }
   
}
async function postProduct(req,res) {
    try{
        const {name,description,price,instock} =req.body
   id = uuidv4();
    const NewProduct = new Product(id,name,description,price,instock);
  

   const response =  NewProduct.addProduct(NewProduct)
   if(response)
   {
    return res.status(200).json({
        message:"Posted successfully",
        data:Catalogue
    })
   }
   else
   {
    return res.status(500).json({
        message:"Error Posting Product"
    })
   }
    } catch (err)
    {
        return res.status(500).json({
            message :"Error Posting New Product"
        })
    }

}
async function patchProduct(req,res) {
    try{
        const {id} = req.params
    const {instock} = req.body;
    const data = Catalogue.find((item)=>item.id===id);
  if(data)
  {
    data.instock = instock;
    return res.status(200).json({
        message:"Instock Status updated succesfully"
    })
  }
  else{
    return res.status(400).json({
        message : "Could Not find Data...Please Provide Valid id"
    })
  }
    } catch (err){
        return res.status(500).json({
            message:"Error Editing instock status"
        })
    }
}
async function putProduct(req,res) {
  try{
    const {id} = req.params
    const {name,description,price,instock} = req.body;
  
    const data =  Catalogue.find((item)=>item.id===id);
   if(data)
   {
     data.name = name;
 data.description = description;
 data.price = price;
 data.instock = instock;
 
 return res.status(200).json({
     message:"Datat Updated Successfully",
    })
   }
 else{
     return res.status(400).json({
         message:"Could not find id",
        })
 }
 
  } catch (err){
    return res.status(500).json({
        message:"Error Updating Data"
    })
  }
   
}

async function deleteProduct(req,res) {
    try{
        const {id} = req.params;
    const found = Catalogue.find((item)=>item.id===id);
    if(found)
    {
        const ind = Catalogue.indexOf(found);
        Catalogue.splice(ind,1);
        return res.status(200).json({
            message : "Data deleted Successfully"
        })
    }
    else{
        return res.status(400).json({
            message:"Could not find data to Delete"
        })
    }
    } catch (err){
        return res.status(500).json({
            message : "Error Deleting Data"
        })
    }


}
module.exports = {getProduct,postProduct,putProduct,deleteProduct,patchProduct}