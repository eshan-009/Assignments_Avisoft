const fs = require("fs");
const listFiles =(path)=>{

 fs.readdir(path,function(error,data){
    if(error)
    {
        console.log("\n\nERROR Reading Directory",error);
    }
    else
    {

        console.log("Directory Read Successfully \n\nFILE LIST :-",data);
       
    }
  
  
});


}



const createDirectory = (name)=>{ 
 fs.mkdir(name,function(err){
    if(err)
    {
        console.log(`\n\nError Creating Directory\n\n`,err)
    }
    else
    {
        console.log(`Directory Created Successfully with name ${name}`)
    }
 })
}



const ReadFileContent = (path)=>{

    fs.readFile(path,"utf8",function(err,data){
        if(err)
                {
                    console.log(`\n\nError Reading Data from ${path}\n\n` ,err)
                }
                else
                {
                    console.log("Data Read Successfully : ",data.toString());
                
                  
                }
              

    })
    
}





const WritetoFile = (path,data)=>{
   fs.open(path,'w',function(err,fd){
    if(err)
    {
        console.log("Error Opening file",err)
    }
    else{
       
      
        fs.write(fd,new Buffer.from(data),function(error){

            if(error)
                    {
                        console.log("Error Writing file due to \n\n",error)
                    }
                    else
                    {
                        console.log(`Data Written : ${data} written to file ${path} Successfully`);
                       
                    }
    
        })
    }
    
   })


}

module.exports = {listFiles,createDirectory,ReadFileContent,WritetoFile}