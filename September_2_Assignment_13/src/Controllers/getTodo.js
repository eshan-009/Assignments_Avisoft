const {Readfile} = require("../Helpers/fileModulefunctions")

async function getTodo(req,res){
    try{
     const {id} = req.params
     let data;
    await Readfile("src/Data/data.json",id).then((item)=>data=item);
     const userdata = data.find((elem)=>elem.id===id)
     if(userdata)
     {
        return res.status(200).json(userdata);
     }
     else if(!userdata && id)
     {
        return res.status(400).json({
             message : "Enter Valid id"
         });
     }
 
      return res.status(200).json(data);
 
    }catch (err){
     res.status(404).json({
         error : err,
         message : "Could Not fetch Data!!! Try Again"
     })
    }
 }

 module.exports = getTodo