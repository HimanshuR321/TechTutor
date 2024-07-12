import React from 'react'
import profile from '../../assets/profile.png';
import stars from '../../assets/stars.png';

const Testimonials = () => {
  return (
    <div className='w-full h-[60vh] bg-slate-950'>
      <p className='text-white text-5xl text-center mb-12'>Reviews from other learners</p>
      <div className='grid grid-cols-4 mx-20 gap-6'>
        <div className='bg-gray-800 flex flex-col pt-4 px-4'>
            <div>
                <div className='flex gap-4 border-b-[1px] border-gray-700 pb-2'>
                    <img className='w-12 h-12' src={profile} alt="" />
                    <div>
                        <p className='text-white text-lg'>Cody Fisher</p>
                        <p className='text-gray-700'>tim.jennings@example.com</p>
                    </div>
                </div>
                <div>
                    <p className='text-gray-400 pt-4'>Coordination of activities improved tremendously with Learn codings.</p>
                    <img className='w-3/5 pt-2 pb-16' src={stars} alt="" />
                </div>
            </div>
        </div>
        <div className='bg-gray-800 flex flex-col pt-4 px-4'>
            <div>
                <div className='flex gap-4 border-b-[1px] border-gray-700 pb-2'>
                    <img className='w-12 h-12' src={profile} alt="" />
                    <div>
                        <p className='text-white text-lg'>Cody Fisher</p>
                        <p className='text-gray-700'>tim.jennings@example.com</p>
                    </div>
                </div>
                <div>
                    <p className='text-gray-400 pt-4'>Coordination of activities improved tremendously with Learn codings.</p>
                    <img className='w-3/5 pt-2 pb-16' src={stars} alt="" />
                </div>
            </div>
        </div>
        <div className='bg-gray-800 flex flex-col pt-4 px-4'>
            <div>
                <div className='flex gap-4 border-b-[1px] border-gray-700 pb-2'>
                    <img className='w-12 h-12' src={profile} alt="" />
                    <div>
                        <p className='text-white text-lg'>Cody Fisher</p>
                        <p className='text-gray-700'>tim.jennings@example.com</p>
                    </div>
                </div>
                <div>
                    <p className='text-gray-400 pt-4'>Coordination of activities improved tremendously with Learn codings.</p>
                    <img className='w-3/5 pt-2 pb-16' src={stars} alt="" />
                </div>
            </div>
        </div>
        <div className='bg-gray-800 flex flex-col pt-4 px-4'>
            <div>
                <div className='flex gap-4 border-b-[1px] border-gray-700 pb-2'>
                    <img className='w-12 h-12' src={profile} alt="" />
                    <div>
                        <p className='text-white text-lg'>Cody Fisher</p>
                        <p className='text-gray-700'>tim.jennings@example.com</p>
                    </div>
                </div>
                <div>
                    <p className='text-gray-400 pt-4'>Coordination of activities improved tremendously with Learn codings.</p>
                    <img className='w-3/5 pt-2 pb-16' src={stars} alt="" />
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Testimonials
