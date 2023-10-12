import React from 'react'

const Card1 = ({imag,head,para}) => {
  
        
     
  return (
    <div className='flex flex-col justify-center items-center'> 
         

    
        <div  >
        <img src={imag} alt="Image" />
        </div>
        <div className='text-center'>
            <h1 className='text-2xl font-medium  ' >
               {head}
            </h1> 
            <p className='text-gray-500'>
            {para}
            </p>
        </div>
    </div>
  )
}

export default Card1
