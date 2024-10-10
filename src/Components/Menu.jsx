import React from 'react'

const Menu = ({text,className}) => {
  return (
    <div className={`text-sm font-bold font-moon text-white ${className}`}>{text}</div>
  )
}

export default Menu