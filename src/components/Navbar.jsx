import React from 'react'
import logo from '../assets/react.svg'
const Navbar = () => {
    return (
        <section className='w-full h-20 flex justify-between items-center px-10 bg-matte-black font-regular text-light'>

            <img src={logo} alt="" className='h-full p-1 ' />

            <div className='flex items-center gap-8 w-full justify-center text-md tracking-wide '>
                <p>Home</p>
                <p>Comics</p>
                <p>Wiki</p>
                <p>Gallery</p>
                <p>About</p>
            </div>

        </section>
    )
}

export default Navbar