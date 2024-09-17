import React from 'react'

const Button = ({buttonContent,buttonColor,buttonTextColor}) => {
  return (
    <div>
      <button className={`bg-${buttonColor}  text-${buttonTextColor} p-4 w-[10rem] mt-20`}>{buttonContent}</button>
    </div>
  )
}

export default Button
