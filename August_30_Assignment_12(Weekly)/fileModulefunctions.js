const fs = require("fs").promises;

async function Readfile(path){
   
 try{

    const data =  await fs.readFile(path);
    let response = data;
    
        return JSON.parse(response);
    
   
 }catch (err){
    console.log("Error Reading File",err)
 }

}

async function UpdateFile(path,userId,name) {
    try{
        const data =  await fs.readFile(path);
    let data1 = JSON.parse(data)
   data1.map((item)=>{
    if(item.userId===userId)
    {
        item.name =name;
    }
    
    })
    await fs.writeFile(path,JSON.stringify(data1)); 
    return data1;
    } catch (err){
        console.log("Error Updating File")
    }

}

async function WriteFile(path,userId,name) {
    try{
        const data =  await fs.readFile(path);
    let data1 = JSON.parse(data)
  
    const obj = {
        userId:userId,
        name:name
    }
   data1.push(obj)
   await fs.writeFile(path,JSON.stringify(data1)); 

    return data1;
    } catch (err){
        console.log("Error Adding Entry")
    }

}

async function deleteRecord(path,userId) {
   try{
    const data =  await fs.readFile(path);
    let data1 = JSON.parse(data)
  
   
   const found = data1.find((item)=>item.userId===userId);

   data1.splice(data1.indexOf(found),1);

   await fs.writeFile(path,JSON.stringify(data1)); 

    return data1;
   } catch (err){
    console.log("Error Deleting Record")
   }

}

module.exports = {Readfile,UpdateFile,WriteFile,deleteRecord}