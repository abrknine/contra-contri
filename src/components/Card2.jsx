import React from 'react'

const Card2 = ({imag,head,para}) => {
  return (
    <div className='flex flex-col justify-center items-center'> 
        
    <div >
    <img src={imag} alt="Image" />
    </div>
    <div className='text-center'>
        <h1 className='text-xl  ' >
           {head}
        </h1> 
        <p className='text-gray-500 text-sm'>
        {para}
        </p>
    </div>
</div>
  )
}

export default Card2
