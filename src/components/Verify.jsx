import React from 'react'
import { RxCross1 } from 'react-icons/rx'; 

const Verify = () => {

    const styles = {
        fontFamily: 'inter, sans-serif',
        fontWeight: 'bold',
        fontSize: '36px',
      };
       const email='bahukhandiabhishek53@gmail.com'
     
  return (
    <div className="bg-white " >
    <div className='my-4 mx-6 text-xl flex justify-between' >
      <span className='mx-6'>contra</span>
      <RxCross1 />
    </div>
    <div className='flex  justify-around items-center  '>

   
    <div className='flex flex-col h-[512px] w-[500px] py-40 pl-20 justify-between  '>
        <h1 className='text-4xl font-semi-bold'>We emailed you a code</h1>
        <p className='my-2 flex flex-col px-6 text-gray-500'>Enter the verification code sent to:  <br />
        <span className='text-gray-700 font-bold'>{email}</span></p>
        <div className='flex flex-col gap-4'>
        <input type="number" className="w-[300px] h-[65px] rounded-xl mx-6 border border-gray-400 py-2" />
<h1 className='mx-8  '>Didnt get your code <span className='text-purple-500'>Send a new code</span></h1> 
        </div>
      
    </div>
    <div  className='h-[512px] w-[500px]'>
        
    </div>
    </div>
    
  </div>
  )
}

export default Verify
