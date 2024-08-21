const postswithP = document.querySelector("[postswithpromise]")
const userwithP = document.querySelector("[userwithpromise]")
const postwithA = document.querySelector("[postwithasync]")
const userwithA = document.querySelector("[userwithasync]")

var result = fetch(`https://jsonplaceholder.typicode.com/posts`)

result.then((res)=>res.json()).then((res)=> {
  
 

   for(i of res.slice(0,6))
   {
    const parent = document.createElement("div");
    var newelem = document.createElement("p");
    newelem.innerHTML = "User Id:" + i.userId;
 
    parent.appendChild(newelem);
    
    newelem = document.createElement("p");
    newelem.innerHTML = "Title :"+i.title

    parent.appendChild(newelem);

    newelem = document.createElement("p");
    newelem.innerHTML = "Body:"+i.body
    parent.appendChild(newelem);

    parent.classList.add("card")
    postswithP.appendChild(parent);
   }
     
})

result = fetch(`https://jsonplaceholder.typicode.com/users`)


result.then((res)=>res.json()).then((res)=> {

 

   for(i of res.slice(0,6))
   {
    const parent = document.createElement("div");
    var newelem = document.createElement("p");
    newelem.innerHTML = "User Id:" + i.id;
 
    parent.appendChild(newelem);
    
    newelem = document.createElement("p");
    newelem.innerHTML = "Name :"+i.name

    parent.appendChild(newelem);

    newelem = document.createElement("p");
    newelem.innerHTML = "UserName:"+i.username
    parent.appendChild(newelem);

    newelem = document.createElement("p");
    newelem.innerHTML = "Address:"+ "Street: "+i.address.street + "&nbsp &nbsp &nbsp"+"suite: " +i.address.suite ;
    parent.appendChild(newelem);

    newelem = document.createElement("p");
    newelem.innerHTML = "Phone:"+i.phone
    parent.appendChild(newelem);

    newelem = document.createElement("p");
    newelem.innerHTML = "Website:"+i.website
    parent.appendChild(newelem);

    parent.classList.add("card")
    userwithP.appendChild(parent);
   }
     
})

async function getposts(){
    const result = await fetch(`https://jsonplaceholder.typicode.com/posts`);
    const data =  await result.json();
    
    for(i of data.slice(0,6))
        {
         const parent = document.createElement("div");
         var newelem = document.createElement("p");
         newelem.innerHTML = "User Id:" + i.userId;
      
         parent.appendChild(newelem);
         
         newelem = document.createElement("p");
         newelem.innerHTML = "Title :"+i.title
     
         parent.appendChild(newelem);
     
         newelem = document.createElement("p");
         newelem.innerHTML = "Body:"+i.body
         parent.appendChild(newelem);
     
         parent.classList.add("card")
         postwithA.appendChild(parent);
        }


}

async function getuser(){
    const result = await fetch(`https://jsonplaceholder.typicode.com/users`);
    const data =  await result.json();

    for(i of data.slice(0,6))
        {
         const parent = document.createElement("div");
         var newelem = document.createElement("p");
         newelem.innerHTML = "User Id:" + i.id;
      
         parent.appendChild(newelem);
         
         newelem = document.createElement("p");
         newelem.innerHTML = "Name :"+i.name
     
         parent.appendChild(newelem);
     
         newelem = document.createElement("p");
         newelem.innerHTML = "UserName:"+i.username
         parent.appendChild(newelem);
     
         newelem = document.createElement("p");
         newelem.innerHTML = "Address:"+ "Street: "+i.address.street + "&nbsp &nbsp &nbsp"+"suite: " +i.address.suite + +
         parent.appendChild(newelem);
     
         newelem = document.createElement("p");
         newelem.innerHTML = "Phone:"+i.phone
         parent.appendChild(newelem);
     
         newelem = document.createElement("p");
         newelem.innerHTML = "Website:"+i.website
         parent.appendChild(newelem);
     
         parent.classList.add("card")
         userwithA.appendChild(parent);
        }
    
}
getposts();
getuser()