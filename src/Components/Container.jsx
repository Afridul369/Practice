import React from 'react'

const Container = ({className,children}) => {
  return (
    <>
    <div className={`max-w-maxcontainer m-auto ${className}`}>{children}</div>
    </>
  )
}

export default Container