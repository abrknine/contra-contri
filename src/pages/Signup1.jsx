import React, { useState } from 'react';
import Card2 from '../components/Card2';
import { BiChevronLeft } from 'react-icons/bi';
import img1 from '../assets/contria.png';
import img2 from '../assets/contrib.png';
import img3 from '../assets/contric.png';
import img4 from '../assets/contrid.png';
import { RxCross1 } from 'react-icons/rx';

const Signup1 = () => {
  const [selectedCard, setSelectedCard] = useState(null);

  const content = [
    {
      imag: img1,
      head: "Build Portfolio",
      para: "Highlight past projects and supercharge your brand."
    },
    {
      imag: img2,
      head: "Get Discovered",
      para: "Make it easier for potential Clients to find you."
    },
    {
      imag: img3,
      head: "Find opportunities",
      para: "Browse high-quality remote jobs, exclusively on Contra."
    },
    {
      imag: img4,
      head: "Get Paid Commission-Free",
      para: "Manage new or existing Clients in one place. You keep 100% of the profit."
    }];

  const styles = {
    fontFamily: 'inter, sans-serif',
    fontWeight: 'bold',
    fontSize: '36px',
  };
  const cardStyle = {
    width: '360px',
    height: '232px',
  };

  const handleCardClick = (index) => {
    setSelectedCard(index);
  };

  return (
    <div className="min-h-screen flex justify-center p-10">
      <div className="bg-white mx-4 p-4 rounded-[20px] w-full md:w-3/4 lg:w-2/3 xl:w-1/2">
        <div className='my-4 mx-6 text-xl flex justify-between' style={styles}>
          <span className='mx-6'>contra</span>
          <RxCross1 />
        </div>
        <div className='mb-10 mx-20'>
          <h1 className='text-[32px] font-medium'>What's your main goal?</h1>
          <p className='text-gray-500'>Don't worry. You'll still have access to all of Contra's features.</p>
        </div>
        <div className='flex justify-center '>
          <div className='grid md:grid-cols-2 gap-6'>
            {content.map((items, index) => (
              <div
                key={index}
                className={`border-[1px] border-solid rounded-[20px] transition-transform hover:shadow-md transform hover:scale-105 flex justify-center text-center ${selectedCard === index ? 'border-gray-900' : 'border-gray-200'}`}
                style={cardStyle}
                onClick={() => handleCardClick(index)}
              >
                <Card2 imag={items.imag} head={items.head} para={items.para} />
              </div>
            ))}
          </div>
        </div>
        <div className='text-center mt-20 flex flex-col gap-4'>
          <div className='flex items-center justify-center gap-6' >
            <BiChevronLeft />
            <button className='bg-gray-800 text-white py-2 px-4 rounded-3xl hover:bg-gray-600 focus:outline-none focus:ring focus:ring-blue-300'>
              Continue
            </button>
          </div>
          <h1>Already using Contra? <span className='text-purple-400'>Sign in here</span></h1>
        </div>
      </div>
    </div>
  );
};

export default Signup1;
