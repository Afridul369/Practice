import React from 'react'

const Button = ({text,className}) => {
  return (
    <div className={` hover:bg-btncolor  rounded-lg text-sm font-moon font-bold duration-500 ${className}`}>{text}</div>
  )
}

export default Button