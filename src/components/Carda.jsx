import React from 'react'

const Card1 = ({imag,head,para}) => {
  
        
     
  return (
    <div> 
         

    
        <div >
        <img src={imag} alt="Image" />
        </div>
        <div>
            <h1 >
               {head}
            </h1>
            <p>
            {para}
            </p>
        </div>
    </div>
  )
}

export default Card1
