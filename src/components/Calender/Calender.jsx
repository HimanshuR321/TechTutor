import React from 'react'
import calenders from '../../assets/calenders.png';
const Calender = () => {
  return (
    <div className='w-full h-full mt-80'>
      <div className='flex flex-col justify-center items-center gap-4'>
        <p className='text-4xl'>Your swiss knife for <span className='text-blue-500 font-bold'>learning any language</span></p>
        <p className='text-center text-lg'>Using spin making learning multiple languages easy. with 20+ languages realistic voice-over, <br /> progress tracking, custom schedule and more.</p>
      </div>
      <div className='flex flex-col gap-12'>
        <div className='mx-40'>
            <img src={calenders} alt="" />
        </div>
        <div className='flex justify-center'>
            <button className='bg-yellow-400 text-black text-center border-b-[1px] border-yellow-100 px-6 py-2 rounded-lg font-semibold w-25 h-10'>Learn More</button>
        </div>
      </div>
    </div>
  )
}

export default Calender
