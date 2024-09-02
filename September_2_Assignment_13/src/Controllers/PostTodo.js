const {WriteFile} = require("../Helpers/fileModulefunctions")
async function PostTodo(req,res){
    try{

        const {id,title,description} = req.body
     
        if(!id || !title || !description)
        {
            return res.status(400).json({message:"Please Enter All details!!!"})
        }
        else
        {
          
            let data;
            
            
         
            
           const response =  await WriteFile("src/Data/data.json",id,title,description).then((item)=>data=item);
            
            if(response)
            {
                return res.status(201).json({message:"Data Created Successfully",
                    res:data
                   })
            }
            else{
                return res.status(500).json({
                 
                    message : "Error Creating Data"
                })
            }
           
           
             }
        }catch (err){
            res.status(500).json({
                error : err,
                message : "Could Not Post Data!! Try Again"
            })
        }
   
}

module.exports = PostTodo;