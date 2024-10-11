// import React from 'react'
// import logo from '../assets/react.svg'
// import { Link } from 'react-router-dom'
// const Navbar = () => {
//     return (
//         <section className='w-full h-20 flex justify-between items-center px-10 bg-matte-black font-regular text-light'>

//             <img src={logo} alt="" className='h-full p-1 ' />

//             <div className='flex items-center gap-8 w-full justify-center text-md tracking-wide '>
//                 <Link to={'/'}><p>Home</p></Link>
//                 <p>Comics</p>
//                 <p>Wiki</p>
//                 <p>Gallery</p>
//                 <Link to={'/about'}><p>About</p></Link>
//             </div>

//         </section>
//     )
// }

// export default Navbar

import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import logo from '../assets/react.svg';

const Navbar = () => {
    const location = useLocation();  // Get the current route

    // Helper function to determine if the link is active
    const isActive = (path) => location.pathname === path;

    return (
        <section className='w-full h-20 flex justify-between items-center px-10 bg-matte-black font-regular text-light'>
            <img src={logo} alt="logo" className='h-full p-1' />

            <div className='flex items-center gap-8 w-full justify-center text-md tracking-wide'>
                <Link to={'/'}>
                    <p className={isActive('/') ? 'text-tacao font-bold' : ''}>Home</p>
                </Link>
                <Link to={'/comics'}>
                    <p className={isActive('/comics') ? 'text-tacao font-bold' : ''}>Comics</p>
                </Link>
                <Link to={'/wiki'}>
                    <p className={isActive('/wiki') ? 'text-tacao font-bold' : ''}>Wiki</p>
                </Link>
                <Link to={'/gallery'}>
                    <p className={isActive('/gallery') ? 'text-tacao font-bold' : ''}>Gallery</p>
                </Link>
                <Link to={'/about'}>
                    <p className={isActive('/about') ? 'text-tacao font-bold' : ''}>About</p>
                </Link>
            </div>
        </section>
    );
};

export default Navbar;
