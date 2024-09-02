const fs = require("fs").promises;

class Todo{
    id
    title
    description
    completed
    constructor(id,title,description){
        this.id = id,
        this.title = title,
        this.description = description,
        this.completed = false
    }
}


async function Readfile(path){
   
 try{

    const data =  await fs.readFile(path);
    let response = data;
    
        return JSON.parse(response);
    
   
 }catch (err){
    console.log("Error Reading File",err)
 }

}

async function UpdateFile(path,id,title,description,completed) {
    try{
        const data =  await fs.readFile(path);
    let data1 = JSON.parse(data)
 
   data1.map((item)=>{
 
    if(item.id===id)
    {
  
        item.title =title;
        item.description = description;
        item.completed = completed;
    }
    
    })
    await fs.writeFile(path,JSON.stringify(data1)); 
    return data1;
    } catch (err){
        console.log("Error Updating File")
    }

}

async function WriteFile(path,id,title,description) {
    console.log("Apple1",path);
    try{
        const data =  await fs.readFile(path);
        
    let data1 = JSON.parse(data);
    
  const NewTodo = new Todo(id,title,description);
  console.log("Apple1",NewTodo);

    data1.push(NewTodo)
   await fs.writeFile(path,JSON.stringify(data1)); 

    return data1;
    } catch (err){
        console.log("Error Adding Entry")
    }

}

async function deleteRecord(path,id) {
   try{
    const data =  await fs.readFile(path);
    let data1 = JSON.parse(data)
  
   
   const found = data1.find((item)=>item.id===id);

   data1.splice(data1.indexOf(found),1);

   await fs.writeFile(path,JSON.stringify(data1)); 

    return data1;
   } catch (err){
    console.log("Error Deleting Record")
   }

}

module.exports = {Readfile,UpdateFile,WriteFile,deleteRecord}