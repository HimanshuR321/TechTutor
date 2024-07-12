import React from 'react'
import leadership from '../../assets/leadership.png';
import responsibility from '../../assets/responsibility.png';
import flexibility from '../../assets/flexibility.png';
import solve from '../../assets/solve.png';
import skills from '../../assets/skills.png';

const Skills = () => {
  return (
    <div className='w-full h-full mt-40 px-20'>
      <div className='flex gap-12'>
        <div className='w-1/2'>
            <p className='text-4xl font-bold'>Get the skills you need for a <span className='text-blue-500 font-bold'>job <br /> that is in demand.</span></p>
        </div>
        <div className='flex flex-col w-1/2 gap-12 items-start'>
            <p>The modern StudyNotion is the dictates its own terms. Today, to be a competitive specialist requires more than professional skills.</p>
            <button className='bg-yellow-400 text-black text-center border-b-[1px] border-yellow-100 px-6 py-2 rounded-lg font-semibold w-25 h-10'>Learn More</button>
        </div>
      </div>
      <div className='w-full mt-32 flex gap-32'>
        <div className='2/5 grid grid-col-1 grid-rows-4'>
            <div className='flex items-center'>
              <div className='w-32 h-32'>
                <img src={leadership} alt="" />
              </div>
              <div className='flex flex-col'>
                <p className='font-bold'>Leadership</p>
                <p>Fully committed to the success company</p>
              </div>
            </div>
            <div className='flex items-center'>
              <div className='w-32 h-32'>
                <img src={responsibility} alt="" />
              </div>
              <div className='flex flex-col'>
                <p className='font-bold'>Responsibility</p>
                <p>Students will always be our top priority</p>
              </div>
            </div>
            <div className='flex items-center'>
              <div className='w-32 h-32'>
                <img src={flexibility} alt="" />
              </div>
              <div className='flex flex-col'>
                <p className='font-bold'>Flexibility</p>
                <p>The ability to switch is an important skill</p>
              </div>
            </div>
            <div className='flex items-center'>
              <div className='w-32 h-32'>
                <img src={solve} alt="" />
              </div>
              <div className='flex flex-col'>
                <p className='font-bold'>Solve the problem</p>
                <p>Code your way to a solution</p>
              </div>
            </div>
        </div>
        <div className='w-3/5 h-auto flex flex-col items-center'>
            <img src={skills} alt="" />
            <div className='w-4/5 h-36 bg-green-900 mt-[-6rem] flex px-12 py-8'>
              <div className='w-1/2 flex items-center gap-6 border-r-[1px] border-emerald-700'>
                <p className='text-white text-4xl font-bold'>10</p>
                <p className='text-emerald-500 font-semibold'>YEARS <br /> EXPERIENCE</p>
              </div>
              <div className='w-1/2 flex justify-center items-center gap-6'>
                <p className='text-white text-4xl font-bold'>250</p>
                <p className='text-emerald-500 font-semibold'>TYPES OF <br /> COURSES</p>
              </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Skills
