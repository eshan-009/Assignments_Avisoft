import React from 'react'
import { NavLink } from 'react-router-dom'

const NavBar = () => {
  return (
    <div className=' w-dvw h-[10vh]  flex justify-center gap-6 py-4 text-xl'>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/todos">Todos</NavLink>
      <NavLink to="/users">Users</NavLink>
      <NavLink to="/posts">Posts</NavLink>
    </div>
  )
}

export default NavBar
