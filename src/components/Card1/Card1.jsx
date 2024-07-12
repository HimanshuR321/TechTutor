import React from 'react'
import main from '../../assets/main.png';
import html_image1 from '../../assets/html_image1.png';
const Card1 = () => {
  return (
    <div className='w-full h-full bg-slate-950 flex flex-col justify-center items-center'>
      <div className='mt-80'>
        <img src={main} alt="" />
      </div>
      <div className='flex items-center'>
        <div className='flex flex-col items-start w-1/2 mx-16 gap-12'>
          <div className='flex gap-4 flex-col'>
              <p className='text-white text-5xl'>Unlock your <span className='text-cyan-300 font-semibold'>coding potential</span> with our online courses.</p>

              <p className='text-gray-400'>Our courses are designed and taught by industry experts who have years of experience in coding and are passionate about sharing their knowledge with you.</p>
          </div>

          <div className='flex gap-8'>
              <button className='bg-yellow-400 text-black text-center border-b-[1px] border-yellow-100 px-6 py-2 rounded-lg font-semibold'>Try it Yourself &#8594;</button>
              <button className='bg-gray-800 text-white text-center border-b-[1px] px-6 py-2 rounded-lg font-semibold'>Learn More</button>
          </div>
        </div>
        <div className='w-1/2'>
          <img className='h-4/5 w-4/5' src={html_image1} alt="" />
        </div>
      </div>
    </div>
  )
}

export default Card1
