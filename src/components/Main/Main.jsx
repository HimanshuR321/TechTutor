import React from 'react'

const Home = () => {
  return (
    <div className='w-full'>
      <div className='flex flex-col items-center mt-16 gap-8'>

        <button className='bg-gray-800 text-gray-400 border-b-[1px] border-slate-300 px-6 py-2 rounded-3xl text-center font-semibold'>Become an instructor &#8594;</button>

        <p className='text-white font-semibold text-4xl font-sans'>Empower Your Future With <span className='text-cyan-300'>Coding Skills</span></p>

        <p className='text-gray-400 max-w-[65%] text-center'>With our online coding courses, you can learn at your own pace, from anywhere in the world, and get access to a wealth of resources, including hands-on projects, quizzes, and personalized feedback from instructors.</p>

        <div className='flex gap-4'>
            <button className='bg-yellow-400 text-black text-center border-b-[1px] border-yellow-100 px-6 py-2 rounded-lg font-semibold'>Learn More</button>
            <button className='bg-gray-800 text-white text-center border-b-[1px] px-6 py-2 rounded-lg font-semibold'>Book a Demo</button>
        </div>
      </div>
    </div>
  )
}

export default Home
