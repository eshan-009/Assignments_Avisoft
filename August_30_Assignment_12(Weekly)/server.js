const express = require("express");
const {Readfile,UpdateFile,WriteFile,deleteRecord} = require("./fileModulefunctions")
const app = express();

app.use(express.json());

app.get("/", async(req,res)=>{
   try{
    const {userId} = req.body
    let data;
   await Readfile("data.json",userId).then((item)=>data=item);
    const userdata = data.find((elem)=>elem.userId===userId)
    if(userdata)
    {
       
       return res.status(200).json(userdata);
    }
    else if(!userdata && userId)
    {
       return res.status(400).json({
            message : "Enter Valid userId"
        });
    }

     return res.status(200).json(data);

   }catch (err){
    res.status(404).json({
        error : err,
        message : "Could Not fetch Data!!! Try Again"
    })
   }
})

app.put("/",async (req,res)=>{
    try{
        const {userId,name} = req.body
    let data;
   await UpdateFile("data.json",userId,name).then((item)=>data=item);
 
   return res.status(200).json({message:"Data Updated Successfully",
    res:data
   })
    }catch (err){
        res.json({
            error : err,
            message : "Could Not Update Data!!! Try Again"
        })
    }
})

app.post("/",async (req,res)=>{
    try{

        const {userId,name} = req.body
        if(!userId || !name)
        {
            return res.status(400).json({message:"Please Enter All details!!!"})
        }
        else
        {
            let data;
            await WriteFile("data.json",userId,name).then((item)=>data=item);
            
            return res.status(201).json({message:"Data Created Successfully",
             res:data
            })
             }
        }catch (err){
            res.status(500).json({
                error : err,
                message : "Could Not Post Data!!! Try Again"
            })
        }
   
})

app.delete("/:userId",async (req,res)=>{
    try{
        const {userId} = req.params
    let data;
   await deleteRecord("data.json",userId).then((item)=>data=item);
   
   return res.status(200).json({message:"Data Deleted Successfully",
    res:data
   })
    }catch (err){
        res.status(500).json({
            error : err,
            message : "Could Not Delete Data!!! Try Again"
        })
    }
})

app.listen(3000,()=>{
    console.log("Server Started Successfully")
})