import React from 'react'

const About = () => {
  return (
    <div name='about' className='text-gray-300 w-full h-screen bg-[#a03022] justify-center'>
      <div className='flex flex-col justify-center items-center w-full h-full'>
        <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>
          <div className='sm:text-right pb-8 pl-4'>
          <p className='text-4xl font-bold inline border-b-4 border-gray-600'>
                        About</p>
                </div>
                <div> 
                </div>
                </div>
                <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
            <div className='sm:text-right text-4xl font-bold'>
                    <p>Hi. I'm Cosmin, nice to meet you. Please take a look around.</p>
                </div>
            <div>
                    <p>I can define myself as a serious, organized and enthusiastic young man with superior skills in working in both team-based and independent capacities. I consider myself a friendly person, that offers support most of the time, in any domain. Flexible hard worker ready to learn and contribute to team success. well-organized team player offering excellent communication and multitasking abilities. Experience managing and coordinating multiple projects and activities, self-directing and making use of resources to meet deadlines with minimal supervision. Diligent, detail-oriented and reliable worker enthusiastic about supporting success. Passionate about art, colors and abstract pieces. Joyful spirit and travel enthusiast.</p>
                </div>
                </div>
            </div>
        </div>
  )
}

export default About