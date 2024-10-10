import React from 'react'

const Button = ({text,className}) => {
  return (
    <div className={`text-white hover:bg-btncolor hover:uppercase rounded-lg text-sm font-moon font-bold duration-500 ${className}`}>{text}</div>
  )
}

export default Button