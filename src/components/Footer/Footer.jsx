import React from 'react'
import logo from '../../assets/logo.png';
import facebook from '../../assets/facebook.png';
import google from '../../assets/google.png';
import twitter from '../../assets/twitter.png';
import youtube from '../../assets/youtube.png';

const Footer = () => {
  return (
    <div className='w-full h-full bg-gray-800'>
        <div className='pt-16 px-32 flex'>
            <div className='flex w-1/2 justify-evenly'>
                <div className='flex flex-col gap-6 items-start'>
                    <div className='flex items-center gap-2'>
                        <img className='w-10' src={logo} alt="" />
                        <p className='text-gray-300 text-2xl font-semibold'>StudyNotion</p>
                    </div>
                    <div className='flex flex-col gap-2'>
                        <p className='text-gray-300 text-lg font-semibold'>Company</p>
                        <p className='text-gray-400'>About</p>
                        <p className='text-gray-400'>Careers</p>
                        <p className='text-gray-400'>Affiliates</p>
                    </div>
                    <div className='flex justify-evenly gap-4'>
                        <img className='w-6' src={facebook} alt="" />
                        <img className='w-6' src={google} alt="" />
                        <img className='w-6' src={twitter} alt="" />
                        <img className='w-6' src={youtube} alt="" />
                    </div>
                </div>
                <div className='flex flex-col gap-12'>
                    <div className='flex flex-col gap-2'>
                        <p className='text-gray-300 text-lg font-semibold'>Resources</p>
                        <p className='text-gray-400'>Articles</p>
                        <p className='text-gray-400'>Blog</p>
                        <p className='text-gray-400'>Chart Sheet</p>
                        <p className='text-gray-400'>Code challenges</p>
                        <p className='text-gray-400'>Docs</p>
                        <p className='text-gray-400'>Projects</p>
                        <p className='text-gray-400'>Videos</p>
                        <p className='text-gray-400'>Workspaces</p>
                    </div>
                    <div className='flex flex-col gap-2'>
                        <p className='text-gray-300 text-lg font-semibold'>Support</p>
                        <p className='text-gray-400'>Help Center</p>
                    </div>
                </div>
                <div className='flex flex-col gap-12'>
                    <div className='flex flex-col gap-2'>
                        <p className='text-gray-300 text-lg font-semibold'>Plans</p>
                        <p className='text-gray-400'>Paid memberships</p>
                        <p className='text-gray-400'>For students</p>
                        <p className='text-gray-400'>Business solutions</p>
                    </div>
                    <div className='flex flex-col gap-2'>
                        <p className='text-gray-300 text-lg font-semibold'>Community</p>
                        <p className='text-gray-400'>Forums</p>
                        <p className='text-gray-400'>Chapters</p>
                        <p className='text-gray-400'>Events</p>
                    </div>
                </div>
            </div>
            <div className='flex justify-evenly w-1/2 border-l-[1px] border-gray-600'>
                <div className='flex flex-col gap-2'>
                    <p className='text-gray-300 text-lg font-semibold'>Subjects</p>
                    <p className='text-gray-400'>Cloud Computing</p>
                    <p className='text-gray-400'>AI</p>
                    <p className='text-gray-400'>Code Foundations</p>
                    <p className='text-gray-400'>Computer Science</p>
                    <p className='text-gray-400'>Cyber Security</p>
                    <p className='text-gray-400'>Data Analytics</p>
                    <p className='text-gray-400'>Data Science</p>
                    <p className='text-gray-400'>Data Visualisation</p>
                    <p className='text-gray-400'>Developer Tools</p>
                    <p className='text-gray-400'>Dev Ops</p>
                    <p className='text-gray-400'>Game Development</p>
                    <p className='text-gray-400'>IT</p>
                    <p className='text-gray-400'>Machine Learning</p>
                    <p className='text-gray-400'>Math</p>
                    <p className='text-gray-400'>Mobile Development</p>
                    <p className='text-gray-400'>Web Design</p>
                    <p className='text-gray-400'>Web Development</p>
                </div>
                <div className='flex flex-col gap-2'>
                    <p className='text-gray-300 text-lg font-semibold'>Languages</p>
                    <p className='text-gray-400'>Bash</p>
                    <p className='text-gray-400'>C</p>
                    <p className='text-gray-400'>C++</p>
                    <p className='text-gray-400'>C#</p>
                    <p className='text-gray-400'>Go</p>
                    <p className='text-gray-400'>HTML & CSS</p>
                    <p className='text-gray-400'>Java</p>
                    <p className='text-gray-400'>Javascript</p>
                    <p className='text-gray-400'>Kotlin</p>
                    <p className='text-gray-400'>PHP</p>
                    <p className='text-gray-400'>Python</p>
                    <p className='text-gray-400'>R</p>
                    <p className='text-gray-400'>Ruby</p>
                    <p className='text-gray-400'>SQL</p>
                    <p className='text-gray-400'>Swift</p>
                </div>
                <div className='flex flex-col gap-2'>
                    <p className='text-gray-300 text-lg font-semibold'>Career Building</p>
                    <p className='text-gray-400'>Career Paths</p>
                    <p className='text-gray-400'>Career Services</p>
                    <p className='text-gray-400'>Interview Prep</p>
                    <p className='text-gray-400'>Professional Certification</p>
                    <p className='text-gray-400'>-</p>
                    <p className='text-gray-400'>Full Catalog</p>
                    <p className='text-gray-400'>Beta Content</p>
                </div>
            </div>
        </div>
        <div className='w-full mt-8 px-32'>
            <div className='flex items-center justify-between border-t-[1px] border-gray-600'>
                <div className='flex gap-8 pt-4'>
                    <p className='text-gray-400'>Privacy Policy</p>
                    <p className='text-gray-400'>Cookie Policy</p>
                    <p className='text-gray-400'>Terms</p>
                </div>
                <div className='flex pt-4'>
                    <p className='text-gray-400'>Made with &#9829; Codehelp &#169; 2023 Studynotion</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer
