import React from 'react'

const Button = ({buttonText}) => {
  return (
    <div>
      <button className='w-36 h-14 bg-yellow-300 text-xl rounded-lg'>{buttonText}</button>
    </div>
  )
}

export default Button
