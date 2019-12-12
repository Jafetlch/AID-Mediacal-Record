import React from 'react'

export const ImageContainer = ({
  children,
  img,
  className = 'undefined',
  height,
  width
}) => {
  return (
    <div
      className={className}
      style={{
        backgroundImage: `url(${img})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        height: `${height}px`,
        width: `${width}px`
      }}
    >
      {children}
    </div>
  )
}
