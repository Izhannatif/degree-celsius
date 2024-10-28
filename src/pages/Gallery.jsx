import React, { useEffect, useState } from 'react'
import { supabase } from '../client/supabaseClient';  // Path to your Supabase client file
import { motion } from 'framer-motion'
const Gallery = () => {
    const [galleryItems, setGalleryItems] = useState([]);
    const [loading, setLoading] = useState(false);
    useEffect(() => {
        const fetchGalleryItems = async () => {
            setLoading(true);
            const { data, error } = await supabase
                .from('gallery')
                .select('*')
            if (error) console.error('Error fetching chapter images:', error);
            else setGalleryItems(data);
            console.log(data);
            setLoading(false);
        };
        fetchGalleryItems();
    }, []);
    if (loading) return <p className='min-h-screen bg-matte-black text-2xl grid place-items-center font-demibold text-light'>Loading...</p>;

    return (
        <section className='w-full h-full bg-matte-black p-10'>
            <motion.h1
                initial={{ y: '-100%' }}
                animate={{ y: '0%' }}
                transition={{ type: 'spring', stiffness: 70, damping: 20 }}
                className='w-full text-5xl md:text-6xl lg:text-7xl font-demibold text-fire-brick text-center '>Gallery</motion.h1>
            <div className='w-full h-full grid place-items-center py-10'>
                {
                    galleryItems.map((item, i) =>

                        item.video_url !== null ?
                            <video className='border-2 border-white w-full lg:w-2/3 rounded-3xl ' key={i} loop controls muted autoPlay={true} src={item.video_url} /> : null

                    )}
                <div className='h-full grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 place-items-center gap-5 py-10'>
                    {
                        galleryItems.map((item, i) =>

                            item.img_url !== null ?
                                <div className='w-full h-max lg:h-max lg:w-max border lg:p-1 rounded-2xl bg-white'>
                                    <img key={i} className='object-cover rounded-2xl h-full lg:h-72 w-full' src={item.img_url} alt="" />
                                </div>
                                : null
                        )}
                </div>
            </div>
        </section>
    )
}

export default Gallery