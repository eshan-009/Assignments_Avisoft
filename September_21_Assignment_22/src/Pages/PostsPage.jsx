import React, { useEffect, useState } from 'react'

const PostsPage = () => {
    const [posts,setPosts] = useState(null)
    async function fetchposts()
    {
        const data = await fetch(`https://jsonplaceholder.typicode.com/posts`);
        const result = await data.json();
        setPosts(result);
    }
    useEffect(()=>{
        fetchposts();
      
    },[])
    
  return (
    <div className=' w-svw mb-16 flex flex-wrap justify-center items-center gap-3 '>
    {
   posts &&  posts.slice(0,6).map((item)=>{
          return(
              <div className=' border w-3/4  flex flex-col items-start justify-center p-3'>
                  <p><b>Serial : </b>{item.id}</p>
                  <p><b>Title : </b>{item.title}</p>
                  <p><b>Body : </b>{item.body}</p>
              </div>
          )
      })
    }
  </div>
  )
}

export default PostsPage
