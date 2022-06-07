import React from 'react'

function Contact() {
  return (
    <div name='contact' className='w-full h-screen bg-[#a03022] flex justify-center items-center p-4'> 
        <form method='POST' action="https://getform.io/f/cb57bcc5-193b-47c9-a29f-909d8bfec874" className='flex flex-col max-w-[600px] w-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 border-gray-600 text-gray-300'>Contact</p>
                <p className='text-gray-300 py-4'>Give me a shout on - cosmincolac@outlook.com</p>
            </div>
            <input className='bg-[#e7e9ef] p-2 ' type="text" placeholder='Name' name='name' />
            <input className='my-4 p-2 bg-[#e7e9ef]' type="email" placeholder='Email' name='email' />
            <textarea className='bg-[#e7e9ef] p-2' name="message" rows="10" placeholder='Message'></textarea>
            <button className='text-white border-2 hover:bg-gray-300 hover:border-gray-300 px-4 py-3 my-8 mx-auto flex items-center'>Submit</button>
        </form>
    </div>


    
  )
}

export default Contact