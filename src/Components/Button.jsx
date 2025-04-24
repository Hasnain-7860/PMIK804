import React from 'react'

const Button = (props) => {
  const{children}=props
  return (
    <div>
    <button className='hidden lg:block bg-red-600 px-6 py-2 font-semibold rounded-3xl text-white '>{children}</button>

    </div>
  )
}

export default Button