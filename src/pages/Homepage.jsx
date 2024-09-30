import React from 'react'
import CustomButton from '../components/CustomButton'
import Slider from 'react-slick';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { FaArrowRightLong } from "react-icons/fa6";
import image from '../assets/image.png'
import { IoArrowForwardCircleOutline } from "react-icons/io5";
import 'swiper/css';
import comic1 from '../assets/comics/1.jpeg';
import comic2 from '../assets/comics/2.jpeg';
import comic3 from '../assets/comics/3.jpeg';
import comic4 from '../assets/comics/4.jpeg';
import comic5 from '../assets/comics/5.jpeg';
import comic6 from '../assets/comics/6.jpeg';


const Homepage = () => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 5000,
        slidesToShow: 4,
        swipeToScroll: true,
        arrows: false,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                },
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                },
            },
        ],
    };
    const chapters = [
        { title: "Chapter 1", description: "The Beginning", imgUrl: "https://d28hgpri8am2if.cloudfront.net/book_images/onix/cvr9781608873968/marvel-comics-9781608873968_hr.jpg" },
        { title: "Chapter 2", description: "The Journey", imgUrl: "https://d28hgpri8am2if.cloudfront.net/book_images/onix/cvr9781608873968/marvel-comics-9781608873968_hr.jpg" },
        { title: "Chapter 3", description: "New Allies", imgUrl: "https://d28hgpri8am2if.cloudfront.net/book_images/onix/cvr9781608873968/marvel-comics-9781608873968_hr.jpg" },
        { title: "Chapter 4", description: "New Allies", imgUrl: "https://d28hgpri8am2if.cloudfront.net/book_images/onix/cvr9781608873968/marvel-comics-9781608873968_hr.jpg" },
        { title: "Chapter 5", description: "New Allies", imgUrl: "https://d28hgpri8am2if.cloudfront.net/book_images/onix/cvr9781608873968/marvel-comics-9781608873968_hr.jpg" },
        { title: "Chapter 6", description: "New Allies", imgUrl: "https://d28hgpri8am2if.cloudfront.net/book_images/onix/cvr9781608873968/marvel-comics-9781608873968_hr.jpg" },
        { title: "Chapter 7", description: "New Allies", imgUrl: "https://d28hgpri8am2if.cloudfront.net/book_images/onix/cvr9781608873968/marvel-comics-9781608873968_hr.jpg" },
    ];
    const characters = [
        { title: "Name 1", imgUrl: image },
        { title: "Name 2", imgUrl: image },
        { title: "Name 3", imgUrl: image },
        { title: "Name 4", imgUrl: image },
        { title: "Name 5", imgUrl: image },
        { title: "Name 6", imgUrl: image },
        { title: "Name 7", imgUrl: image },
    ];

    const reviews = [
        { name: "John Doe", comment: "Amazing comic series! The visuals are stunning, and the story keeps me hooked.", rating: 5, imgUrl: image },
        { name: "Jane Smith", comment: "A refreshing take on superheroes, with deep character development!", rating: 4, imgUrl: image },
        { name: "Bob Johnson", comment: "Can't wait for the next chapter. This series has quickly become my favorite.", rating: 5, imgUrl: image },
        { name: "Alice Lee", comment: "The art style is unique and fits perfectly with the storytelling. Highly recommend!", rating: 4, imgUrl: image },
        { name: "Charlie Kim", comment: "I love the protagonist! A must-read for comic lovers.", rating: 5, imgUrl: image },
    ];

    return (
        <section className='w-full h-full '>

            {/* Homepage First Div Start */}
            <div className='header-div h-[90vh] w-full flex items-center justify-center bg-matte-black flex-col'>
                <p className='text-tacao text-md font-demibold pb-2'>Welcome to Degree Celsius 👋</p>
                <h1 className='text-7xl font-extrabold text-light text-center pb-10'> Meet your <br /> new comic book hero</h1>
                <p className='text-sm tracking-wider text-light font-regular w-3/4 text-center pb-10'>Discover a world of thrilling adventures and unforgettable characters. Join our protagonist on their epic quest With stunning visuals and captivating storytelling, this comic series will leave you wanting more.</p>
                <CustomButton width='237' height='57' text={'Learn More'} color={'fill-tacao'} />
            </div>
            {/* Homepage First Div End */}

            {/* Homepage Second Div Start */}
            <div className='h-[80vh] bg-light w-full flex justify-around items-center gap-20 px-10'>
                <div className='w-1/2 flex gap-10 pl-10'>
                    <div className='h-[60vh] w-1/2 bg-midnight-blue rounded-tr-full rounded-bl-full petal-1-bg'>
                    </div>
                    <div className="h-[60vh] w-1/2 bg-fire-brick rounded-2xl rounded-br-full rounded-tl-full petal-2-bg">
                    </div>
                </div>
                <div className='w-1/2 flex justify-center items-center h-full'>
                    <div className='h-[80vh] w-full flex items-start flex-col justify-center text-start'>
                        <p className='font-medium p-2 text-fire-brick'>Featured Comics</p>
                        <p className='text-5xl font-extrabold w-3/4 pt-2 pb-6'>Announcing Gooodyng: The Polymath</p>
                        <p className='text-sm font-regular tracking-wide text-stone-600 w-3/4 pb-5'>Discover a world of thrilling adventures and unforgettable characters. Join our protagonist on their epic quest With stunning visuals and captivating storytelling, this comic series will leave you wanting more.</p>
                        <CustomButton width='200' height='50' text={'Learn More'} color={'fill-fire-brick'} />
                    </div>
                </div>
            </div>
            {/* Homepage Second Div End */}

            {/* Homepage Third Div Start */}

            <div className='h-full w-full bg-tacao'>
                <div className='h-16 w-16 bg-light relative -top-8 -left-10 rotate-45'></div>
                <div className='flex gap-5 flex-col'>
                    <div className='text-lg text-fire-brick font-medium px-20'>Comics</div>
                    <div className='px-20 flex items-end justify-between'>
                        <div className='text-6xl tracking-wide font-medium text-light '>Discover All Comics</div>
                        <div className='flex gap-2 items-center px-10 font-medium text-sm text-fire-brick hover:gap-10 transition-all duration-300'>Swipe <FaArrowRightLong />
                        </div>
                    </div>
                    <div className="px-20 py-10">
                        <Swiper
                            className=''
                            spaceBetween={20}
                            freeMode={true}
                            slidesPerView={4}
                            effect='creative'
                            //   modules={[Pagination]}
                            breakpoints={{
                                1024: { slidesPerView: 4 },
                                600: { slidesPerView: 2 },
                            }}
                        >
                            {chapters.map((chapter, index) => (
                                <SwiperSlide className='' key={index}>
                                    <div className="">
                                        <div className="bg-white shadow-lg overflow-hidden w-[20vw] drop-shadow-[4px_4px_0px_#1f1f1f]">
                                            <img src={chapter.imgUrl} alt={chapter.title} className=" w-full object-cover" />
                                        </div>
                                        <div className="p-2">
                                            <h3 className="text-lg text-light font-regular">{chapter.title}</h3>
                                        </div>
                                    </div>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>
                </div>
                <div className='h-16 w-16 bg-light relative top-8 left-[98%] rotate-45'></div>

            </div>

            {/* Homepage Third Div End */}


            {/* Homepage Fourth Div Start */}

            <div className='h-full w-full bg-light px-10 py-16'>
                {/* <div className='h-16 w-16 bg-light relative -top-8 -left-10 rotate-45'></div> */}
                <div className='flex gap-5 '>
                    <div className='w-1/4 flex flex-col items-start justify-start '>
                        <div className='text-lg text-midnight-blue font-medium px-10 py-3'>Wiki</div>
                        <div className='flex items-end justify-between px-10'>
                            <div className='text-5xl tracking-wide font-medium text-matte-black '>Meet All of <br />Our Characters</div>
                        </div>
                        <p className='w-full py-10 pl-10 text-sm tracking-wide font-regular text-stone-700'>Discover a world of thrilling adventures and unforgettable characters. Join our protagonist on their epic quest With stunning visuals and captivating storytelling, this comic series will leave you wanting more.</p>
                        <div className='px-10'>
                            <CustomButton width='200' height='50' text={'See All'} color={'fill-midnight-blue'} />
                        </div>
                    </div>
                    <div className=" px-20 py-10 w-full">
                        <Swiper
                            className=''
                            spaceBetween={10}
                            freeMode={true}
                            slidesPerView={3}
                            loop={true}
                            //   modules={[Pagination]}
                            breakpoints={{
                                1024: { slidesPerView: 3 },
                                600: { slidesPerView: 2 },
                            }}
                        >
                            {characters.map((character, index) => (
                                <SwiperSlide className='' key={index}>
                                    <div className="">
                                        <div className="overflow-hidden">
                                            <img src={character.imgUrl} alt={character.title} className=" w-full object-cover" />
                                        </div>
                                        <div className="px-5 flex justify-between items-center">
                                            <h3 className="text-lg text-matte-black font-regular">{character.title}</h3>
                                            <IoArrowForwardCircleOutline size={40} className='-rotate-45 text-midnight-blue hover:rotate-[360deg] transition-all duration-300 hover:scale-110' />
                                        </div>
                                    </div>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>
                </div>
                {/* <div className='h-16 w-16 bg-light relative top-8 left-[98%] rotate-45'></div> */}

            </div>

            {/* Homepage Fourth Div End */}


            {/* Homepage Fifth Div Start */}

            <div className='h-full w-full bg-stone-200'>
                <div className='h-16 w-16 bg-light relative -top-8 -left-10 rotate-45'></div>
                <div className=''>
                    <div className='w-full flex flex-col items-center justify-center'>
                        <div className='text-lg text-fire-brick font-medium px-10 py-3'>Testimonials</div>
                        <div className='flex items-end justify-between px-10'>
                            <div className='text-5xl tracking-wide font-medium text-matte-black'>
                                Reader Reviews and Comments
                            </div>
                        </div>
                        <p className='w-2/3 text-center py-5 text-sm tracking-wide font-regular text-stone-700'>
                            Hear what our readers have to say about the comic series. Join them on their epic adventure with stunning visuals and captivating storytelling.
                        </p>
                    </div>

                    {/* Swiper for reviews */}
                    <div className="px-20 py-10 w-full">
                        <Swiper
                            spaceBetween={20}
                            freeMode={true}
                            slidesPerView={3}
                            loop={true}
                            breakpoints={{
                                1024: { slidesPerView: 3 },
                                600: { slidesPerView: 2 },
                            }}
                        >{reviews.map((review, index) => (
                            <SwiperSlide key={index}>
                                <div className='h-8 w-8 bg-stone-200 relative top-4 -left-4 rotate-45'></div>
                                <div className="bg-white p-6  h-[30vh] flex gap-5">
                                    <img className='aspect-square object-contain rounded-full' src={review.imgUrl} alt="" />
                                    <div className="flex flex-col items-start justify-between gap-5">
                                        <div className="text-yellow-500">
                                            {'★'.repeat(review.rating)}{'☆'.repeat(5 - review.rating)}
                                            <p className="text-lg text-stone-700 italic">
                                                "{review.comment}"
                                            </p>
                                        </div>
                                        <div>
                                            <p className="text-lg text-matte-black font-semibold">
                                                - {review.name}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className='h-8 w-8 bg-stone-200 relative bottom-4 left-[97%] rotate-45'></div>
                            </SwiperSlide>
                        ))}
                        </Swiper>
                    </div>
                </div>
                <div className='h-16 w-16 bg-light relative top-8 left-[98%] rotate-45'></div>
            </div>

            {/* Homepage Fifth Div End */}

            {/* Homepage Sixth Div Start */}
            <div className='w-full h-full bg-light flex flex-col justify-center items-center p-10'>
                <div className='w-full flex flex-col items-center justify-center'>
                    <div className='text-lg text-fire-brick font-medium px-10 py-3'>Gallery</div>
                    <div className='flex items-end justify-between px-10'>
                        <div className='text-5xl tracking-wide font-medium text-matte-black'>
                            Some of Our work
                        </div>
                    </div>
                    <p className='w-2/3 text-center py-5 text-sm tracking-wide font-regular text-stone-700'>
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Optio ipsum suscipit cum ex at ad molestias illo hic! Maxime explicabo voluptates laboriosam consequatur exercitationem ab, veniam dolorem aut sint doloremque!
                    </p>
                </div>

                <div className='w-11/12 h-full grid grid-cols-3 grid-rows-2 py-10'>
                    <img className='object-contain' src={comic1} alt="" />
                    <img src={comic2} alt="" />
                    <img src={comic3} alt="" />
                    <img src={comic4} alt="" />
                    <img src={comic5} alt="" />
                    <img src={comic6} alt="" />
                </div>

            </div>
            {/* Homepage Sixth Div End */}

        </section>
    )
}

export default Homepage