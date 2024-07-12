import React from 'react'
import beginner from '../../assets/beginner.png';
import lessons from '../../assets/lessons.png';
import courses_img from '../../assets/courses_img.png';

const Courses = () => {
  return (
    <div className='w-full h-full'>
      <div className='h-2/3 w-full bg-slate-950 pt-20'>
        <div className='h-1/2 flex flex-col items-center'>
            <p className='text-white text-4xl font-semibold mt-[10rem]'>Unlock the <span className='text-cyan-300'>Power of Code</span></p>
            <p className='text-gray-400'>Learn to Build Anything You Can Image</p>
        </div>
      </div>
      <div className='grid grid-cols-3 gap-16 mx-48 mt-[-10rem] absolute'>
        <div className='bg-white pt-8 pl-6 pr-6 flex flex-col gap-20 shadow-md'>
            <div className='flex flex-col gap-4'>
                <p className='text-xl font-semibold'>Learn HTML</p>
                <p className='text-gray-400'>This course covers the basic concepts of HTML including creating and structuring web pages, adding text, links, images, and more.</p>
            </div>
            <div className='flex justify-between border-t-[1px] border-dashed border-gray-600 pb-4 pt-2'>
                <div className='flex gap-2'>
                    <img className='w-6' src={beginner} alt="" />
                    <p className='text-blue-900'>Beginner</p>
                </div>
                <div className='flex gap-2'>
                    <img className='w-6' src={lessons} alt="" />
                    <p className='text-blue-900'>6 Lessons</p>
                </div>
            </div>
        </div>
        <div className='bg-gray-800 pt-8 pl-6 pr-6 flex flex-col gap-20'>
            <div className='flex flex-col gap-4'>
                <p className='text-xl font-semibold text-white'>Learn CSS</p>
                <p className='text-gray-400'>This course explores advanced topics in HTML5 and CSS3, including animations, transitions, and layout techniques
                </p>
            </div>
            <div className='flex justify-between border-t-[1px] border-dashed border-gray-600 pb-4 pt-2'>
                <div className='flex gap-2'>
                    <img className='w-6' src={beginner} alt="" />
                    <p className='text-gray-400'>Beginner</p>
                </div>
                <div className='flex gap-2'>
                    <img className='w-6' src={lessons} alt="" />
                    <p className='text-gray-400'>6 Lessons</p>
                </div>
            </div>
        </div>
        <div className='bg-gray-800 pt-8 pl-6 pr-6 flex flex-col gap-20'>
            <div className='flex flex-col gap-4'>
                <p className='text-xl font-semibold text-white'>Responsive Web Design</p>
                <p className='text-gray-400'>This course teaches responsive web design techniques, allowing web pages to adapt to different devices and screen sizes</p>
            </div>
            <div className='flex justify-between border-t-[1px] border-dashed border-gray-600 pb-4 pt-2'>
                <div className='flex gap-2'>
                    <img className='w-6' src={beginner} alt="" />
                    <p className='text-gray-400'>Beginner</p>
                </div>
                <div className='flex gap-2'>
                    <img className='w-6' src={lessons} alt="" />
                    <p className='text-gray-400'>6 Lessons</p>
                </div>
            </div>
        </div>
      </div>
      <div>
        <img src={courses_img} alt="" />
        <div className='flex gap-8 mt-[-8rem] justify-center'>
            <button className='bg-yellow-400 text-black text-center border-b-[1px] border-yellow-100 px-6 py-2 rounded-lg font-semibold'>Continue Lesson &#8594;</button>
            <button className='bg-gray-800 text-white text-center border-b-[1px] px-6 py-2 rounded-lg font-semibold'>Learn More</button>
        </div>
      </div>
    </div>
  )
}

export default Courses
