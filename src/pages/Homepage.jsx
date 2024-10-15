import React, { useEffect, useState } from 'react'
import CustomButton from '../components/CustomButton'
import Slider from 'react-slick';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { FaArrowRightLong } from "react-icons/fa6";
import image from '../assets/image.png'
import { IoArrowForwardCircleOutline } from "react-icons/io5";
import 'swiper/css';
import { supabase } from '../client/supabaseClient'; // Import the Supabase client

import comic1 from '../assets/comics/1.jpeg';
import comic2 from '../assets/comics/2.jpeg';
import comic3 from '../assets/comics/3.jpeg';
import comic4 from '../assets/comics/4.jpeg';
import comic5 from '../assets/comics/5.jpeg';
import comic6 from '../assets/comics/6.jpeg';
import { Link } from 'react-router-dom';
import CustomButton2 from '../components/CustomButton2';
import PageTransition from '../components/PageTransition';


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
    const reviews = [
        { name: "John Doe", comment: "Amazing comic series! The visuals are stunning, and the story keeps me hooked.", rating: 5, imgUrl: image },
        { name: "Jane Smith", comment: "A refreshing take on superheroes, with deep character development!", rating: 4, imgUrl: image },
        { name: "Bob Johnson", comment: "Can't wait for the next chapter. This series has quickly become my favorite.", rating: 5, imgUrl: image },
        { name: "Alice Lee", comment: "The art style is unique and fits perfectly with the storytelling. Highly recommend!", rating: 4, imgUrl: image },
        { name: "Charlie Kim", comment: "I love the protagonist! A must-read for comic lovers.", rating: 5, imgUrl: image },
    ];
    const [characters, setCharacters] = useState([]);
    const [chapters, setChapters] = useState([]);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        const fetchData = async () => {
            try {
                // Fetch characters
                const { data: charactersData, error: charactersError } = await supabase
                    .from('characters')
                    .select('id, name, character_image2_url');
                if (charactersError) throw charactersError;

                // Fetch chapters
                const { data: chaptersData, error: chaptersError } = await supabase
                    .from('chapters')
                    .select('id, title, poster_image_url');
                if (chaptersError) throw chaptersError;

                // Append extra slides for "More characters" and "More chapters"
                const extraCharacterSlide = {
                    name: 'Stay Tuned on Comics...',

                };
                const extraChapterSlide = {
                    title: 'Stay Tuned on Comics...',
                };

                // Add the extra slide to the end of the fetched data
                setCharacters([...charactersData, extraCharacterSlide]);
                setChapters([...chaptersData, extraChapterSlide]);

            } catch (error) {
                console.error('Error fetching data:', error.message);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    if (loading) return <div className='min-h-screen bg-matte-black text-2xl grid place-items-center font-demibold text-light'>Loading...</div>;
    return (
        <PageTransition>
            <section className='w-full h-full '>
                {/* Homepage First Div Start */}
                <div className='header-div h-[90vh] w-full flex items-center justify-center bg-matte-black flex-col px-1'>
                    <p className='text-tacao text-md font-demibold pb-2'>Welcome to Degree Celsius 👋</p>
                    <h1 className='text-4xl md:text-7xl font-extrabold text-light text-center pb-10'> Meet your <br /> new comic book hero</h1>
                    <p className='text-xs md:text-sm tracking-wider text-light font-regular w-3/4 text-center pb-10'>Discover a world of thrilling adventures and unforgettable characters. Join our protagonist on their epic quest With stunning visuals and captivating storytelling, this comic series will leave you wanting more.</p>
                    <CustomButton width='238' height='57' text={'Learn More'} color={'fill-tacao'} />
                </div>
                {/* Homepage First Div End */}

                {/* Homepage Second Div Start */}
                <div className='h-full md:h-[80vh] w-full flex flex-col-reverse md:flex-row  justify-center items-center gap-5 md:gap-20 px-5 md:px-10'>
                    <div className='w-full md:w-1/2 flex flex-col md:pl-10 items-center justify-center pb-10 md:pb-0 gap-2'>
                        <div className='h-44 md:h-72 w-full  md:w-full bg-center md:bg-left petal-1-bg bg-cover text-center md:bg-cover'>
                        </div>
                        <div className="h-44 md:h-72 w-full  md:w-full bg-center md:bg-left petal-2-bg bg-cover text-center md:bg-cover">
                        </div>
                    </div>
                    <div className='w-full md:w-1/2 flex justify-center items-center h-full p-5'>
                        <div className='h-full md:h-[80vh] w-full flex items-start flex-col justify-center text-center md:text-start'>
                            <p className='font-medium p-2 text-fire-brick w-full'>Featured Comics</p>
                            <p className='text-3xl md:text-5xl font-extrabold w-full md:w-3/4 pt-2 pb-6'>Announcing Gooodyng: The Polymath</p>
                            <p className='text-sm font-regular tracking-wide text-stone-600 w-full md:w-3/4 pb-5'>Discover a world of thrilling adventures and unforgettable characters. Join our protagonist on their epic quest With stunning visuals and captivating storytelling, this comic series will leave you wanting more.</p>
                            <div className='w-full flex items-center justify-center md:justify-start'><CustomButton width='200' height='50' text={'Learn More'} color={'fill-fire-brick'} /></div>
                        </div>
                    </div>
                </div>
                {/* Homepage Second Div End */}

                {/* Homepage Third Div Start */}

                <div className='h-full w-full bg-tacao'>
                    <div className='h-16 w-16 bg-light relative -top-8 -left-10 rotate-45'></div>
                    <div className='flex gap-5 flex-col justify-center'>
                        <div className='text-lg text-fire-brick font-medium px-20 text-center'>Comics</div>
                        <div className='px-20 flex flex-col items-center justify-center gap-5'>
                            <div className='text-5xl md:text-6xl font-demibold text-light text-center '>Discover All Chapters</div>
                            <div className='flex gap-2 items-center px-10 font-medium text-sm text-fire-brick hover:gap-10 transition-all duration-300'>Swipe <FaArrowRightLong />
                            </div>
                        </div>
                        <div className="px-5 md:px-10 lg:px-20 py-0 md:py-10">
                            <Swiper
                                className=''
                                spaceBetween={50}
                                freeMode={true}
                                slidesPerView={1}
                                effect='creative'
                                //   modules={[Pagination]}
                                breakpoints={{
                                    1024: { slidesPerView: 3 },
                                    600: { slidesPerView: 1 },
                                    400:{slidesPerView:1},
                                }}
                            >
                                {chapters.map((chapter, index) => (
                                    <SwiperSlide key={index}>
                                        <div className="">
                                            <div className="">
                                                {
                                                    chapter.poster_image_url ?
                                                        <div className='lg:mx-5'>
                                                            <div className='relative h-10 w-10 bg-tacao top-5 right-5 rotate-45'></div>
                                                            <img src={chapter.poster_image_url} className="h-[50vh] min-w-[30vw] object-cover object-left " />
                                                        </div>
                                                        :
                                                        <div className=''>
                                                        <div className='relative h-10 w-10 bg-tacao top-5 right-0 rotate-45'></div>
                                                        <div className=' h-[50vh] min-w-[30vw] bg-matte-black mx-5 font-demibold text-3xl text-wrap flex items-center text-light px-5  justify-center'>More Chapters Coming Soon.</div>
                                                    </div>
                                                }
                                            </div>
                                            <div className="p-2">
                                                <Link to={chapter.id ? `/chapter/${chapter.id}` : ''}><h3 className="text-lg text-fire-brick font-regular">{chapter.title}</h3></Link>
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
                    <div className='flex flex-col lg:flex-row gap-5 '>
                        <div className='w-full lg:w-1/4 flex flex-col items-center lg:items-start justify-start '>
                            <div className='text-lg text-midnight-blue font-medium px-10 py-3'>Wiki</div>
                            <div className='flex items-end justify-between px-10'>
                                <div className='text-5xl font-medium text-matte-black text-center lg:text-start '>Meet All of <br />Our Characters</div>
                            </div>
                            <p className='w-full py-10 pl-10 text-sm tracking-wide font-regular text-stone-700 text-center lg:text-start'>Discover a world of thrilling adventures and unforgettable characters. Join our protagonist on their epic quest With stunning visuals and captivating storytelling, this comic series will leave you wanting more.</p>
                            <div className='px-10'>
                                <CustomButton width='200' height='50' text={'See All'} color={'fill-midnight-blue'} />
                            </div>
                        </div>
                        <div className="px-5 md:px-10 lg:px-20 py-0 lg:py-10 w-full">
                            <Swiper
                                className=''
                                spaceBetween={20}
                                freeMode={true}
                                slidesPerView={1}
                                loop={true}
                                breakpoints={{
                                    1024: { slidesPerView: 3},
                                    700: { slidesPerView: 2 },
                                    400:{slidesPerView:1, pagination:true },

                                }}
                            >
                                {characters.map((character, index) => (
                                    <SwiperSlide key={index}>
                                        <div className="">
                                            <div className="overflow-hidden">
                                                {
                                                    character.character_image2_url ?
                                                        <div className=''>
                                                            <div className='relative h-10 w-10 bg-light top-5 right-5 rotate-45'></div>
                                                            <img src={character.character_image2_url} className="h-[40vh] md:h-[50vh] lg:h-[60vh] object-cover" />
                                                        </div>

                                                        :
                                                        <div className=''>
                                                            <div className='relative h-10 w-10 bg-light top-5 right-0 rotate-45'></div>
                                                            <div className=' h-[40vh] md:h-[50vh] lg:h-[60vh]  bg-matte-black mx-5 font-demibold text-3xl text-wrap flex items-center text-light p-5 justify-center'>Introducing more characters soon.</div>
                                                        </div>
                                                }
                                            </div>
                                            <br />
                                            <div className="px-5 flex justify-between items-center">
                                                <h3 className="text-lg text-matte-black font-regular">{character.name}</h3>
                                                <Link to={character.id ? `/character/${character.id}` : null} ><IoArrowForwardCircleOutline size={40} className='-rotate-45 text-midnight-blue hover:rotate-[360deg] transition-all duration-300 hover:scale-110' /></Link>
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
                                <div className='text-5xl tracking-wide font-medium text-matte-black text-center'>
                                    Reader Reviews and Comments
                                </div>
                            </div>
                            <p className='w-2/3 text-center py-5 text-sm tracking-wide font-regular text-stone-700'>
                                Hear what our readers have to say about the comic series. Join them on their epic adventure with stunning visuals and captivating storytelling.
                            </p>
                        </div>

                        {/* Swiper for reviews */}
                        <div className="px-20 md:py-10 w-full">
                            <Swiper
                                spaceBetween={20}
                                freeMode={true}
                                slidesPerView={1}
                                loop={true}
                                breakpoints={{
                                    1024: { slidesPerView: 2 },
                                    700: { slidesPerView: 1 },
                                    
                                }}
                            >{reviews.map((review, index) => (
                                <SwiperSlide key={index}>
                                    <div className='h-8 w-8 bg-stone-200 relative top-4 -left-4 rotate-45'></div>
                                    <div className="bg-white p-6 h-full md:h-[30vh] flex flex-col md:flex-row gap-5">
                                        <img className='h-48 aspect-square object-contain rounded-full' src={review.imgUrl} alt="" />
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
                <div className='w-full h-full bg-light flex flex-col justify-center items-center p-5 md:p-10'>
                    <div className='w-full flex flex-col items-center justify-center'>
                        <div className='text-lg text-fire-brick font-medium px-10 py-3'>Gallery</div>
                        <div className='flex items-end justify-between px-10'>
                            <div className='text-5xl tracking-wide font-medium text-matte-black text-center'>
                                Some of Our work
                            </div>
                        </div>
                        <p className='w-2/3 text-center py-5 text-sm tracking-wide font-regular text-stone-700'>
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Optio ipsum suscipit cum ex at ad molestias illo hic! Maxime explicabo voluptates laboriosam consequatur exercitationem ab, veniam dolorem aut sint doloremque!
                        </p>
                    </div>

                    <div className='w-11/12 h-full grid grid-cols-1 grid-rows-2 md:grid-cols-2 lg:grid-cols-3  py-10'>
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
        </PageTransition>
    )
}

export default Homepage