  import React from 'react';
  import Card1 from '../components/Carda';
  import img1 from '../assets/img1.webp';
  import img2 from '../assets/img2.webp';
  import {RxCross1} from 'react-icons/rx'

  const Signup = () => {
    const content = [
      {
        imag: img2,
        head: "I am independent",
        para: "Find work and manage your freelance business"
      },
      {
        imag: img1,
        head: "I am Hiring",
        para: "Post opportunities and discover independents"
      }
    ];
    const styles = {
      fontFamily: 'inter, sans-serif',
      fontWeight: 'bold', 
      fontSize: '36px', 
    };

    return (
      <div className=" min-h-screen flex justify-center mt-32">
        <div className="bg-white mx-4 p-4  rounded-[20px]" style={{height: '760px' ,width: '1200px',}}>
          <div className='my-4  mx-6 text-xl flex  justify-between' style={styles}>
            <span className=' mx-6'>contra</span>
            <RxCross1/>
          </div>
          <div className=' mb-10' >
            <h1 className='text-[32px] font-medium  text-center '>What brings you to Contra?</h1>
          </div>
          <div className='flex flex-row gap-16 justify-center'>
          {content.map((items, index) => (
            <div key={index} className='border-[1px]  border-solid border-gray-200 p-6  rounded-[20px] transition-transform hover:shadow-md transform hover:scale-105'>
              <Card1 imag={items.imag} head={items.head} para={items.para}  />
            </div>
          ))}
          </div>
          <div  className='  text-center  mt-20 flex flex-col gap-4'>
          <h1>Already using Contra? <span className='text-purple-400'>Sign in here</span></h1> 
            <p className='text-xs font-light'> By continuing, you agree to Contra's Terms of Use and confirm that you have read  <br />Contra's Privacy Policy</p>
          </div>
        </div>
      </div>
    );
  };

  export default Signup;

