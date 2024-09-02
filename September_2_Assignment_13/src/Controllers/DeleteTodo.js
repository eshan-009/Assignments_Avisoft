const {deleteRecord} =require("../Helpers/fileModulefunctions")
async function DeleteTodo(req,res){
    try{
        const {id} = req.params
    let data;
   await deleteRecord("src/Data/data.json",id).then((item)=>data=item);
   
   return res.status(200).json({message:"Data Deleted Successfully",
    res:data
   })
    }catch (err){
        res.status(500).json({
            error : err,
            message : "Could Not Delete Data!!! Try Again"
        })
    }
}

module.exports = DeleteTodo;