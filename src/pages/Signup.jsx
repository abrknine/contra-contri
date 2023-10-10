import React from 'react';
import Card1 from '../components/Carda';
import img1 from '../assets/img1.webp';
import img2 from '../assets/img2.webp';

const Signup = () => {
  const content = [
    {
      imag: img1,
      head: "i am independent",
      para: "Find work and manage your freelance buisness"
    },
    {
      imag: img2,
      head: "i am",
      para: "Post opportunities and discover independents"
    }
  ];

  

  return (

    <div className='bg-purple-200"' >
      <div className='flex'>
        {content.map((items, index) => (
          <div key={index} className='flex'  >
            <Card1 imag={items.imag} head={items.head} para={items.para}  />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Signup;
