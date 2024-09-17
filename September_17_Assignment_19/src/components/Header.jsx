import React from 'react'
import { CiShoppingCart } from "react-icons/ci";
import { CgProfile } from "react-icons/cg";
const Header = () => {
  return (
    <div className='bg-blue-950 text-gray-300'>
      <nav className='flex justify-center justify-between p-4 mx-16 items-center'>
        <h1 className='text-3xl font-bold'>SkipKart</h1>
        <ul className='flex gap-8 text-xl cursor-pointer '>
            <li className='hover:text-white'>Home</li>
            <li className='hover:text-white' >Category</li>
            <li className='hover:text-white' >Support</li>
        </ul>

      <div className='flex items-center gap-3 cursor-pointer'>
      <CiShoppingCart size={35}/>
      <CgProfile size={40} />
      </div>
      </nav>
    </div>
  )
}

export default Header
