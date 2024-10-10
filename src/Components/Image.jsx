import React from 'react'

const Image = ({imgAlt,imgSrc,className}) => {
  return (
   <>
   <img className={`${className}`} src={imgSrc} alt={imgAlt} />
   </>
  )
}

export default Image