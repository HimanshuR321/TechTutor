import React from 'react';
import search from '../../assets/search.png';
import shopping from '../../assets/shopping.png';
import profile from '../../assets/profile.png';

const Navbar = () => {
  return (
    <div className='w-full h-[8%] bg-slate-950 flex justify-between items-center border-b-[1px] border-gray-700 px-4'>
        <div className='flex flex-grow justify-center items-center'>
            <nav className='text-slate-300 flex gap-8'>
                <a className='text-yellow-300 font-bold' href="#">Home</a>
                <a href="#">Catalog &#8964;</a>
                <a href="#">About Us</a>
                <a href="#">Contact Us</a>
            </nav>
        </div>
        <div className='flex gap-6 items-center mr-10'>
            <img className='w-6' src={search} alt="Search" />
            <img className='w-6' src={shopping} alt="Shopping Cart" />
            <img className='w-6' src={profile} alt="Profile" />
        </div>
    </div>
  );
}

export default Navbar;
