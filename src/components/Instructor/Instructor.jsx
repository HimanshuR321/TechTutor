import React from 'react'
import instructor from '../../assets/instructor.png';

const Instructor = () => {
  return (
    <div className='w-full h-full bg-slate-950 mt-24 flex'>
        <div className='flex w-1/2 h-full items-center px-20'>
        <img src={instructor} alt="" />
        </div>
        <div className='w-1/2 h-full flex flex-col justify-center px-24 gap-10'>
            <div className='flex flex-col gap-2'>
                <p className='text-white text-5xl font-semibold'>Become an <br /> <span className='text-blue-500'> Instructor</span></p>
                <p className='text-gray-400'>Instructors from around the world teach millions of students on StudyNotion. We provide the tools and skills to teach what you love.</p>
            </div>
            <div>
                <button className='bg-yellow-400 text-black text-center border-b-[1px] border-yellow-100 px-6 py-2 rounded-lg font-semibold'>Start Teaching Today &#8594;</button>
            </div>
        </div>
    </div>
  )
}

export default Instructor
