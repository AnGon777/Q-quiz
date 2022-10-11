import React, { useState } from 'react';
import {NavLink} from 'react-router-dom';
import { Bars3CenterLeftIcon, XMarkIcon } from '@heroicons/react/24/solid'
import './styles/Header.css'

const Header = () => {
    const [open, setOpen] = useState(false)
    return (
        <div className='px-4 py-5  mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 relative'>
            <nav className='relative flex items-center justify-between'>
               <div className='text-2xl font-bold'>
                    <NavLink to='/'>O-Quiz</NavLink>
               </div>
                <ul className={`active bg-white p-3 md:flex items-center w-screen md:w-auto space-l-8 space-y-2 md:space-y-0 md:space-x-8 absolute md:static ${open ? 'top-10': 'top-[-200px]'}`}>
                    <li>
                    <NavLink className='font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-purple-700 text-lg '
                     to='/topics'
                     >topics</NavLink>
                    </li>
                  
                    <li>
                    <NavLink className='font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-purple-700 text-lg'
                     to='/statistics'
                     >statistics</NavLink>
                    </li>
                    <li>
                    <NavLink className='font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-purple-700 text-lg'
                     to='/blogs'
                     >blogs</NavLink>
                    </li>
                </ul>
               
                
                <div onClick={()=> setOpen(!open)}  className="h-7 w-7 text-gray-800 cursor-pointer md:hidden hover:text-purple-700">
               {
                open ? <XMarkIcon/> :  <Bars3CenterLeftIcon/>
               }
           </div>
         </nav>
            

            
        
      
    </div>
    );
};

export default Header;

{/* <div className="title">
            <NavLink className='text-white text-xl font-medium' to='/'>O-Quize</NavLink>
        </div>
        <div className={`links bg-purple-300 p-4 flex flex-col md:flex-row absolute md:static duration-500 ease-in-out ${open ? 'top-12': 'top-[-200px]'}`}>
           
            <NavLink className='text-white text-xl px-5' to='/'>Orders</NavLink>
            <NavLink className='text-white text-xl px-5' to='/statistics'>Stats</NavLink>
            <NavLink className='text-white text-xl px-5' to='/blogs'>Blogs</NavLink>
        </div>
        
        <div onClick={()=> setOpen(!open)}  className="h-6 w-6 text-white md:hidden">
            {
                open ? <XMarkIcon/> :  <Bars3CenterLeftIcon/>
            }
        </div> */}