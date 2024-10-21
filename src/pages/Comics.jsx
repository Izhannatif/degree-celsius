import React, { useEffect, useState } from 'react'
import { supabase } from '../client/supabaseClient';
import logo from '../assets/react.svg';
import { Link } from 'react-router-dom';

const Comics = () => {

  const [comic, setComic] = useState([]);
  const [chapters, setChapters] = useState([]);

  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data: comicData, error: comicError } = await supabase.
          from('comics').
          select('id,title,description,release_date');
        if (comicError) throw comicError;
        const { data: chaptersData, error: chaptersError } = await supabase
          .from('chapters')
          .select('id, title, description ,poster_image_url, release_date');
        if (chaptersError) throw chaptersError;
        console.log(comicData);
        console.log(chaptersData);
        setChapters(chaptersData);
        setComic(comicData);
      }
      catch (error) {
        console.error('Error fetching data:', error.message);
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, [])
  if (loading) return <div className='min-h-screen bg-matte-black text-2xl grid place-items-center font-demibold text-light'>Loading...</div>;

  return (

    <section className='w-full h-full p-10 bg-light'>
      <div className='w-full flex flex-col md:flex-row items-start justify-around'>
        <div className='w-full md:w-1/3 '>
          <img className='' src={logo} alt="" />
        </div>
        <div className='w-full md:w-1/2 pt-10 text-center md:text-start'>{
          comic.map((c, i) => (
            <div className='flex flex-col gap-2'>
              <div className='font-demibold text-4xl pb-5'>{c.title}</div>
              <div className='outfit text-lg font-normal text-justify pb-5'>{c.description}</div>
              <div className='font-bold outfit text-lg text-start'>Released Date: <span className='font-medium outfit text-md'>{c.release_date}</span></div>
            </div>
          ))
        }</div>
      </div>
      <div className='flex flex-col gap-6 text-matte-black py-10'>
        {
          chapters.map((c, i) => (
            <div className='w-full bg-[#0a0a0a13] p-5 flex flex-col gap-5 rounded-sm shadow-[5px_5px_0px_black] border-2 border-matte-black hover:shadow-none transition-all duration-300'>
              <div className='flex flex-col md:flex-row gap-10'>
                <img className='h-56 w-full md:h-32 md:w-40 object-cover' src={c.poster_image_url} alt="" />
                <div className='flex flex-col gap-5'>
                  <div className='font-demibold text-lg'>
                    {c.title}
                  </div>
                  <div className='outfit font-normal text-md'>{c.description}</div>
                  <div className='outfit font-normal text-md text-start'>Released on {c.release_date}</div>
                  <Link state={{ posterUrl: c.poster_image_url }} to={c.id ? `/chapter/${c.id}` : ''}>
                    <div className='font-demibold text-sm underline text-start text-fire-brick'>Read Chapter</div>
                  </Link>
                </div>
              </div>
            </div>
          ))
        }
        <div className='w-full bg-[#0a0a0a13] p-5 flex flex-col gap-5 rounded-sm shadow-[5px_5px_0px_black] border-2 border-matte-black hover:shadow-none transition-all duration-300'>
          <div className='flex gap-10'>
            <div className='flex flex-col gap-5 font-demibold'>
              More Releasing Soon...
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Comics