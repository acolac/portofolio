import React from 'react'
import WorkImg from '../assets/photolab.jpeg'
import seleniumtest from '../assets/seleniumtest.png'
import gradebook from '../assets/gradebook.jpg'
import slideshow from '../assets/slideshow.png'
import bankcredit from '../assets/bankcredit.png'
import currency from '../assets/currency.png'
import passgenerator from '../assets/passgenerator.png'
import ReactPp from '../assets/reactpo.png'

function Work() {
  return (
    <div name='work' className='w-full md:h-screen text-gray-300 bg-[#a03022]'>
      <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
        <div className='pb-8'>
          <p className='text-4xl font-bold inline border-b-4 text-gray-300 border-gray-600'>Work</p>
            <p className='py-6'>Check out some of my recent works!</p>
            </div>
            
            {/* first proj */}
            {/* grid */}
            <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-4'>
                <div style={{backgroundImage: `url(${WorkImg})`}}  className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
                    {/* effect */}
                    <div className='opacity-0 group-hover:opacity-100'>
                        <span className='text-2x1 font-bold text-white tracking-wider'>
                            Graphic Designs Portofolio

                        </span>
                        <div className='pt-8 text-center'>
                            <a href="https://wong-s-laboratory.webnode.ro/">
                            <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Click Here!</button>
                            </a>

                        </div>
                    </div>
                </div>

                {/* second proj */}
                <div style={{backgroundImage: `url(${bankcredit})`}}  className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
                    {/* effect */}
                    <div className='opacity-0 group-hover:opacity-100'>
                        <span className='text-2x1 font-bold text-white tracking-wider'>
                            Bank Credit Application

                        </span>
                        <div className='pt-8 text-center'>
                            <a href='https://github.com/acolac/bankcredit.git'>
                            <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                                Code
                            </button>
                            </a>
                        </div>
                    </div>
                </div>

                {/* third proj */}
                <div style={{backgroundImage: `url(${currency})`}}  className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
                    {/* effect */}
                    <div className='opacity-0 group-hover:opacity-100'>
                        <span className='text-2x1 font-bold text-white tracking-wider'>
                            Currency Converter Application

                        </span>
                        <div className='pt-8 text-center'>
                            <a href='https://github.com/acolac/currencyconverter.git'>
                            <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                                Code
                            </button>
                            </a>
                        </div>
                    </div>
                </div>

                {/* fourth proj */}
                <div style={{backgroundImage: `url(${gradebook})`}}  className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
                    {/* effect */}
                    <div className='opacity-0 group-hover:opacity-100'>
                        <span className='text-2x1 font-bold text-white tracking-wider'>
                            Fictional GradeBook Application

                        </span>
                        <div className='pt-8 text-center'>
                            <a href='https://github.com/acolac/fictional-gradebook.git'>
                            <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                                Code
                            </button>
                            </a>
                        </div>
                    </div>
                </div>

                {/* fifth proj */}
                <div style={{backgroundImage: `url(${passgenerator})`}}  className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
                    {/* effect */}
                    <div className='opacity-0 group-hover:opacity-100'>
                        <span className='text-2x1 font-bold text-white tracking-wider'>
                            Password Generator Application

                        </span>
                        <div className='pt-8 text-center'>
                            <a href='https://github.com/acolac/passwordgen.git'>
                            <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                                Code
                            </button>
                            </a>
                        </div>
                    </div>
                </div>


                {/* sixth proj */}
                <div style={{backgroundImage: `url(${slideshow})`}}  className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
                    {/* effect */}
                    <div className='opacity-0 group-hover:opacity-100'>
                        <span className='text-2x1 font-bold text-white tracking-wider'>
                            Picture Slideshow Application

                        </span>
                        <div className='pt-8 text-center'>
                            <a href='https://github.com/acolac/slideshow.git'>
                            <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                                Code
                            </button>
                            </a>
                        </div>
                    </div>
                </div>

                {/* sixth proj */}
                <div style={{backgroundImage: `url(${seleniumtest})`}}  className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
                    {/* effect */}
                    <div className='opacity-0 group-hover:opacity-100'>
                        <span className='text-2x1 font-bold text-white tracking-wider justify-center'>
                            Automation Testing Python

                        </span>
                        <div className='pt-8 text-center'>
                            <a href='https://github.com/acolac/automationsele.git'>
                            <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                                Code
                            </button>
                            </a>
                        </div>
                    </div>
                </div>

                {/* seventh proj */}
                <div style={{backgroundImage: `url(${ReactPp})`}}  className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
                    {/* effect */}
                    <div className='opacity-0 group-hover:opacity-100'>
                        <span className='text-2x1 font-bold text-white tracking-wider justify-center'>
                            React Portofolio Website

                        </span>
                        <div className='pt-8 text-center'>
                            <a href='/'>
                            <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                                Code
                            </button>
                            </a>
                        </div>
                    </div>
                </div>


            </div>
        </div>


    </div>
  )
}

export default Work