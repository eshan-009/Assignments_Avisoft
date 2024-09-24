import React, { useEffect, useState } from 'react'

const TodosPage = () => {
    const [todos,setTodos] = useState([])
    async function fetchTodos() {
        
        const data = await fetch(`https://jsonplaceholder.typicode.com/todos`);
        const result = await data.json();
        setTodos(result);
    }
    useEffect(()=>{
        fetchTodos()
       
    },[])
    
  return (
    <div className='h-dvh w-dvw flex flex-wrap justify-center items-center gap-3'>
     
{
    todos && todos.slice(0,10).map((item)=>{
            return(
                <div className='border w-72 h-36 p-3 '>
                    <p><b>Serial No :</b> {item.id}</p>
                    <p><b>Title :</b> {item.title}</p>
                    <p><b>Status :</b> {item.completed ? "Completed":"Pending"}</p>
                </div>
            )
         })
}
    </div>
  )
}

export default TodosPage
