import React from 'react'

const Badge = ({text,className}) => {
  return (
    <>
    <div className={`text-sm font-bold font-moon py-1 text-center text-white w-14  rounded bg-bar  ${className}`}>{text}</div>
    </>
  )
}

export default Badge