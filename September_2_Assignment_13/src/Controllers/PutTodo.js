const {UpdateFile} = require("../Helpers/fileModulefunctions")
async function PutTodo(req,res){
    try{
        const {id} = req.params
        const {title,description,completed} = req.body
    let data;
   const response = await UpdateFile("src/Data/data.json",id,title,description,completed).then((item)=>data=item);
 if(response)
 {
    return res.status(200).json({message:"Data Updated Successfully",
        res:data
       })
 }
 else
 {
    res.json({
        message : "Could Not Update Data"
    })
 }
   
    }catch (err){
        res.json({
            error : err,
            message : "Could Not Update Data!!! Try Again"
        })
    }
}

module.exports = PutTodo;