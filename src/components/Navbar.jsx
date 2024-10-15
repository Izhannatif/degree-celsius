import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import logo from '../assets/react.svg';
import { RiMenu4Line } from "react-icons/ri";
import { IoClose } from "react-icons/io5";
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
    const location = useLocation();  // Get the current route
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    // Helper function to determine if the link is active
    const isActive = (path) => location.pathname === path;

    const handleMobileMenu = () => {
        setMobileMenuOpen(!mobileMenuOpen);
    };

    // Effect to lock the scroll when mobile menu is open
    useEffect(() => {
        if (mobileMenuOpen) {
            document.body.style.overflowY = 'hidden'; // Prevent scrolling
        } else {
            document.body.style.overflowY = 'auto'; // Restore scrolling
        }

        return () => {
            document.body.style.overflowY = 'auto';
        };
    }, [mobileMenuOpen]);

    return (
        <>
            <section className='w-full h-20 flex justify-between items-center px-4 md:px-10 bg-matte-black font-regular text-light'>
                {/* Logo */}
                <img src={logo} alt="logo" className='h-20 md:h-full p-1 z-20' />

                {/* Desktop menu */}
                <div className='hidden md:flex items-center gap-6 md:gap-8 w-full justify-center text-md tracking-wide'>
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

                {/* Mobile menu toggle button */}
                <div className='block md:hidden z-20'>
                    <div onClick={handleMobileMenu}>
                        {!mobileMenuOpen ? (
                            <RiMenu4Line className='bg-fire-brick p-2 h-8 w-8 rounded-lg cursor-pointer' size={30} />
                        ) : (
                            <IoClose className='h-8 w-8 rounded-lg cursor-pointer hover:rotate-180 transition-all duration-300' size={30} />
                        )}
                    </div>
                </div>
            </section>

            {/* AnimatePresence to handle exit animations */}
            <AnimatePresence>
                {mobileMenuOpen && (
                    <motion.div
                        className='fixed top-0 left-0 h-full w-full flex flex-col justify-center items-center bg-matte-black text-light z-10'
                        initial={{ y: '-100%' }} // Start position offscreen
                        animate={{ y: 0 }} // Animate to visible state
                        exit={{ y: '-100%' }} // Exit animation back to offscreen
                        transition={{ type: 'spring', stiffness: 70, damping: 20 }}
                    >
                        <div className='flex flex-col items-center gap-6 w-full text-xl uppercase font-bold'>
                            <Link to={'/'} onClick={handleMobileMenu}>
                                <p className={isActive('/') ? 'text-tacao font-bold' : ''}>Home</p>
                            </Link>
                            <Link to={'/comics'} onClick={handleMobileMenu}>
                                <p className={isActive('/comics') ? 'text-tacao font-bold' : ''}>Comics</p>
                            </Link>
                            <Link to={'/wiki'} onClick={handleMobileMenu}>
                                <p className={isActive('/wiki') ? 'text-tacao font-bold' : ''}>Wiki</p>
                            </Link>
                            <Link to={'/gallery'} onClick={handleMobileMenu}>
                                <p className={isActive('/gallery') ? 'text-tacao font-bold' : ''}>Gallery</p>
                            </Link>
                            <Link to={'/about'} onClick={handleMobileMenu}>
                                <p className={isActive('/about') ? 'text-tacao font-bold' : ''}>About</p>
                            </Link>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};

export default Navbar;
