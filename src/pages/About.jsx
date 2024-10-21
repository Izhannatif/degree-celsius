import React from 'react'
import CustomButton from '../components/CustomButton'
import { FaDiscord } from "react-icons/fa";
import { FaX, FaXTwitter } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa6";
import PageTransition from '../components/PageTransition';

const About = () => {
    return (
        <PageTransition>
            <section className='h-full w-full'>

                <div className='header-div h-[40vh] w-full flex items-center justify-center bg-matte-black flex-col'>
                    <p className='text-tacao text-md font-demibold pb-2'>Canvas<span className='outfit font-bold'> / </span>Work</p>
                    <h1 className='text-7xl font-extrabold text-light text-center pb-10'>About <br className='block md:hidden' /> us</h1>
                </div>
                <div className='p-5 md:p-10 lg:p-20 bg-light'>
                    <div className='flex flex-col w-full pb-10'>
                        <div className='flex flex-col gap-5'>
                            <p className='text-3xl font-medium'>About</p>
                            <p className='text-xl outfit font-medium text-stone-700 p-5'>Degrees Celsius is a Shonen Manga written and illustrated by Discord user #crystalcruise. The story also delves into horror and dystopia. <br /> The story's first chapter was released on 06.24.2024.
                            </p>
                        </div>
                    </div>

                    <div className='flex flex-col w-full pb-10 '>
                        <div className='flex flex-col gap-5'>
                            <p className='text-3xl font-medium'>Synopsis</p>
                            <p className='text-xl outfit font-medium text-stone-700 p-5'>All 24 year old Kelvin Hugh ever wanted was a simple and peaceful life however circumstances out of his control have led him down a dark and dangerous path. Born in a horrific dystopia where freedom doesn't exist, Kelvin eventually finds himself joining the Doves, a group of underground vigilantes who seek to use a super weapon called the Thermogear inorder to overthrow the government and restore humanity’s freedom. <br />
                                Witness a story of tragedy, comradery, betrayals and learn how you can grow to choose your own destiny rather than walking a predetermined path.
                            </p>
                        </div>
                    </div>

                    <div className='flex flex-col w-full pb-10'>
                        <div className='flex flex-col gap-5'>
                            <p className='text-3xl font-medium'>Join Our Community</p>
                            <div className='text-xl outfit font-medium text-stone-700 p-5'>
                                <ul className='flex flex-col gap-5'>
                                <a href='https://discord.gg/ybJumEEYk2'> <li className='flex gap-5 items-center'> <FaDiscord className='h-8 w-8 text-purple-800 transition-all duration-300' /> Discord</li> </a>
                                    <li className='flex gap-5 items-center'> <FaXTwitter className='h-8 w-8 text-black transition-all duration-300' /> Twitter - (TBD)</li>
                                    <li className='flex gap-5 items-center'> <FaYoutube className='h-8 w-8 text-red-600 transition-all duration-300' /> YouTube - (TBD)</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className='flex flex-col w-full pb-10'>
                        <div className='flex flex-col gap-5'>
                            <p className='text-3xl font-medium'>Inspirations</p>
                            <div className='text-xl outfit font-medium text-stone-700 p-5 list-disc'>

                                <li>JoJo's Bizarre Adventure</li>
                                <li>Kill La Kill</li>
                                <li>Bleach</li>
                                <li>Hunter X Hunter</li>
                                <li>The Saw Franchise</li>
                                <li>Brave New World</li>
                                <li>Animal Farm</li>
                                <li>Real life ☠️</li>

                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </PageTransition>
    )
}

export default About