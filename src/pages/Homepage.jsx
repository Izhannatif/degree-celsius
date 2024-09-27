import React from 'react'
import CustomButton from '../components/CustomButton'

const Homepage = () => {
    return (
        <section className='w-full h-full '>

            {/* Homepage First Div Start */}
            <div className='h-[90vh] w-full flex items-center justify-center bg-matte-black flex-col'>
                <p className='text-tacao text-md font-demibold pb-2'>Welcome to Degree Celsius 👋</p>
                <h1 className='text-7xl font-extrabold text-light text-center pb-10'> Meet your <br /> new comic book hero</h1>
                <p className='text-sm tracking-wider text-light font-regular w-3/4 text-center pb-10'>Discover a world of thrilling adventures and unforgettable characters. Join our protagonist on their epic quest With stunning visuals and captivating storytelling, this comic series will leave you wanting more.</p>
                <CustomButton width='237' height='57' text={'Learn More'} color={'fill-tacao'} />
            </div>
            {/* Homepage First Div End */}

            {/* Homepage Second Div Start */}
            <div className='h-[80vh] bg-light w-full flex justify-around items-center gap-20 px-10'>
                <div className='w-1/2 flex gap-10 pl-10'>
                    <div className='h-[60vh] w-1/2 bg-midnight-blue rounded-tr-full rounded-bl-full'>
                    </div>
                    <div className='h-[60vh] w-1/2 bg-fire-brick rounded-2xl rounded-br-full rounded-tl-full'>
                    </div>
                </div>
                <div className='w-1/2 flex justify-center items-center h-full'>
                    <div className='h-[80vh] w-full flex items-start flex-col justify-center text-start'>
                        <p className='font-medium p-2 text-fire-brick'>Featured Comics</p>
                        <p className='text-5xl font-extrabold w-3/4 pt-2 pb-6'>Announcing Gooodyng: The Polymath</p>
                        <p className='text-sm font-regular tracking-wide text-stone-600 w-3/4 pb-5'>Discover a world of thrilling adventures and unforgettable characters. Join our protagonist on their epic quest With stunning visuals and captivating storytelling, this comic series will leave you wanting more.</p>
                        <CustomButton width='200' height='50' text={'Learn More'} color={'fill-midnight-blue'} />
                    </div>
                </div>
            </div>
            {/* Homepage Second Div End */}

            {/* Homepage Third Div Start */}

            <div className='h-[80vh] w-full bg-tacao'>
                <div className='h-16 w-16 bg-light relative -top-8 left-2 rotate-45'></div>
                


            </div>

            {/* Homepage Third Div End */}


        </section>
    )
}

export default Homepage