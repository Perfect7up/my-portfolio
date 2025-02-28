'use client';

import { navLinks } from '@/constant/constant';
import Link from 'next/link';
import React, { useEffect } from 'react';
import { HiBars3BottomRight } from 'react-icons/hi2';

type Props = {
  openNav: () => void;
}


const Nav = ({openNav}:Props) => {
  const [navBg, setNavBg] = React.useState(false);

  useEffect(() => {
    const handler = () => {
      if(window.scrollY>=90) {
        setNavBg(true);
      }
      if(window.scrollY<90) {
        setNavBg(false);
      }
    };

    window.addEventListener('scroll', handler);

    return () => {
       window.removeEventListener('scroll', handler);
    }
  }, []);

  return (
    <div className={`fixed ${navBg ? "bg-[#240b39]" : "fixed"} h-[12vh] z-[10]  w-full transition-all duration-200 `}>
      <div className="flex items-center h-full justify-between w-[95%] sm:w-[90%] xl:w-[80%] mx-auto">
       <img src='/images/logo.png' alt='logo' width={170} height={170}  className='ml-[0.3rem] sm:ml-0'/>
        <div className="flex items-center space-x-10">
          <div className="hidden lg:flex items-center space-x-8">
          {navLinks.map((link) => (
            <Link href={link.url} key={link.id}>
              <p className='nav_link'>{link.label}</p>
            </Link>
          ))}
          </div>
          <div className="flex items-center space-x-4">
            <button className='md-px-10 md-py-3  px-4 py-2 text-blue-800 font-semibold sm:text-base text-sm bg-white hover:bg-gray-200 transition-all duration-200 rounded-lg'>Hire Me</button>
            <HiBars3BottomRight onClick={openNav} className='w-8 h-8 cursor-pointer text-white lg:hidden' />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Nav;