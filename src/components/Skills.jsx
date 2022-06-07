import React from 'react'
import HTML from '../assets/html.png'
import CSS from '../assets/css.png'
import JavaScript from '../assets/javascript.png'
import Node from '../assets/node.png'
import ReactImg from '../assets/react.png'
import Photoshop from '../assets/photoshop.png'
import PythonImg from '../assets/py.png'
import JavaImg from '../assets/java.png'
import SqlImg from '../assets/sql.png'
import {Link} from 'react-scroll'

function Skills() {
  return (
        <div name='skills' className='bg-[#a03022] text-gray-300 w-full md:h-screen justify-center'>

        <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
            <div>
                    <p className='text-4xl font-bold inline border-b-4 border-gray-600'>Skills</p>
                    <p className='py-4'> Some technologies I've worked with in creation of my projects</p>
            </div>

                <div className='w-full grid grid-col-2 sm:grid-cols-4 gap-4 text-center py-8'>
                    <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                        <img className='w-20 mx-auto' src={HTML} alt="HTML icon" />
                        <a href='https://html.spec.whatwg.org/' className='my-4 text-gray-300'>HTML</a>
                </div>

                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                        <img className='w-20 mx-auto' src={CSS} alt="CSS icon" />
                        <a href='https://www.w3.org/TR/CSS/#css' className='my-4 text-gray-300'>CSS</a>
                </div>

                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                        <img className='w-20 mx-auto' src={JavaScript} alt="JS icon" />
                        <a href='https://www.javascript.com/' className='my-4 text-gray-300'>JavaScript</a>
                </div>

                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                        <img className='w-20 mx-auto' src={ReactImg} alt="React icon" />
                        <a href='https://reactjs.org/' className='my-4 text-gray-300'>React</a>
                </div>

                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                        <img className='w-20 mx-auto' src={Node} alt="Node icon" />
                        <a href='https://nodejs.org/en/' className='my-4 text-gray-300'>Node.js</a>
                </div>

                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                        <img className='w-20 mx-auto' src={Photoshop} alt="Photoshop icon" />
                        <a href='https://www.adobe.com/ro/products/photoshop/landpb.html?mv=search&sdid=LZ32SYVR&ef_id=4052d5064a9419aeeef6b79be3353c7c:G:s&s_kwcid=AL!3085!10!78752673994521!78752961999846&msclkid=4052d5064a9419aeeef6b79be3353c7c' className='my-4 text-gray-300'>Photoshop</a>
                </div>

                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                        <img className='w-20 mx-auto' src={JavaImg} alt="Java icon" />
                        <a href='https://www.java.com/en/' className='my-4'>Java</a>
                </div>

                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                        <img className='w-20 mx-auto' src={PythonImg} alt="Py icon" />
                        <a href='https://www.python.org/' className='my-4 text-gray-300'>Python</a>
                </div>

                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                        <img className='w-20 mx-auto' src={SqlImg} alt="MySql icon" />
                        <a href='https://www.mysql.com/' className='my-4 text-gray-300'>MySql</a>
                </div>

        
            </div>
        </div>
    </div>
  )
}

export default Skills