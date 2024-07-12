import React from 'react'
import html_image2 from '../../assets/html_image2.png';
const Card1 = () => {
  return (
    <div className='w-full h-2/3 bg-slate-950'>
      <div className='flex items-center pt-60'>
        <div className='w-1/2 mx-16'>
          <img className='w-full' src={html_image2} alt="" />
        </div>  
        <div className='flex flex-col items-start w-1/2 mx-20 gap-12'>
          <div className='flex gap-4 flex-col'>
              <p className='text-white text-5xl'>Start <span className='text-cyan-300 font-semibold'>coding <br/>in seconds</span> </p>

              <p className='text-gray-400'>Our courses are designed and taught by industry experts who have years of experience in coding and are passionate about sharing their knowledge with you.</p>
          </div>

          <div className='flex gap-8'>
              <button className='bg-yellow-400 text-black text-center border-b-[1px] border-yellow-100 px-6 py-2 rounded-lg font-semibold'>Continue Lesson &#8594;</button>
              <button className='bg-gray-800 text-white text-center border-b-[1px] px-6 py-2 rounded-lg font-semibold'>Learn More</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Card1