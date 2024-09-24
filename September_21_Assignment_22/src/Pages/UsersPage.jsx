import React, { useEffect, useState } from 'react'

const UsersPage = () => {

    const [users,setUsers] = useState(null);
    async function fetchUsers() {
        const data = await fetch(`https://jsonplaceholder.typicode.com/users`);
        const result = await data.json();
        setUsers(result);
    }
    useEffect(()=>{
      fetchUsers()
    },[])

  return (
    <div className='h-svh w-svw flex flex-wrap justify-center items-center gap-3'>
      {
     users &&  users.map((item)=>{
            return(
                <div className='border w-72 h-36 flex flex-col items-start justify-center p-3'>
                    <p><b>Serial : </b>{item.id}</p>
                    <p><b>Name : </b>{item.name}</p>
                    <p><b>Email : </b>{item.email}</p>
                </div>
            )
        })
      }
    </div>
  )
}

export default UsersPage
