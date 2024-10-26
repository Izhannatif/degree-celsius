import React from 'react'

const Footer = () => {
    return (
        <section className='w-full h-full bg-matte-black flex flex-col items-center justify-center static bottom-0 '>
            {/* <div className='h-20 w-20 bg-light relative -top-11 -left-10 rotate-45'></div> */}
            <div className='font-heavy text-6xl md:text-8xl lg:text-9xl text-light pb-5 w-full text-center'>
                DEGREE <br className='block lg:hidden' /> CELSIUS.
            </div>
            <p className='text-white border-t w-full text-center py-4 font-regular'>Powered By  <span className='underline font-demibold'><a href="https://swiftcoda.com" target="_blank">SwiftCoda.</a></span></p>

        </section>
    )
}

export default Footer