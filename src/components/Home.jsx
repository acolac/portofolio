import React from 'react'
import {HiArrowNarrowRight} from 'react-icons/hi'
import {Link} from 'react-scroll'

const Home = () => {
  return (
<div name='home' className='w-full h-screen bg-[#a03022] justify-center'>

{/*container*/}
<div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
        <p className='text-white'>Hello, I am</p>
        <h1 className='text-4xl sm:text-7xl font-bold  text-[#ccd6f6]'>
        Colac Alexandru Cosmin
        </h1>
        <h1 className='text-4xl sm:text-7xl font-bold text-[#ccd6f6]'>
       ..but you call me `Wong`
        </h1>
        <h2 className='text-4xl sm:text-7xl font-bold text-[#8892b0]'>
        If you are here I guess you wish to know more about myself
        </h2>
        <p className='text-[#8892b0] py-4 max-w-[700px]'>
          Well, in that case I'm a senior test engineer
          with small time projects in different programming languages 
          that tries to develop his skills and push the limits. 
          I am eager to develop myself everyday!
        </p>
        <div>
        <Link to='work' smooth={true} duration={500}>
          <button className='text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-gray-600 hover:border-gray-600'>
        
            Take a look at my work
          
            <span className='group-hover:rotate-90 duration-300'>
              <HiArrowNarrowRight className='ml-3 ' />
            </span>
          </button>
          </Link>
        </div>
      </div>
    </div>
  );
};


export default Home

