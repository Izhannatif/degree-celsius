import { useEffect, useState } from 'react';
import { supabase } from '../client/supabaseClient';  // Path to your Supabase client file
import { Link, useLocation, useParams } from 'react-router-dom';
import CustomButton from '../components/CustomButton';

const ChapterPage = () => {
    const { chapterId } = useParams(); // Getting the character ID from the URL
    const location = useLocation(); // Get the location object

  const [chapterDetails, setChapterDetails] = useState(null);
  const [chapterImages, setChapterImages] = useState([]);
  const posterUrl = location.state?.posterUrl;

  useEffect(() => {
    // Fetch chapter details
    const fetchChapterDetails = async () => {
      const { data, error } = await supabase
        .from('chapters')
        .select('title, description, release_date')
        .eq('id', chapterId)
        .single();
      if (error) console.error('Error fetching chapter details:', error);
      else setChapterDetails(data);
      console.log(data);
    };
    console.log(posterUrl);
    // Fetch chapter images
    const fetchChapterImages = async () => {
      const { data, error } = await supabase
        .from('chapter_images')
        .select('image_url, image_order')
        .eq('chapter_id', chapterId)
        .order('image_order', { ascending: true });
      if (error) console.error('Error fetching chapter images:', error);
      else setChapterImages(data);
      console.log(data);
    };

    fetchChapterDetails();
    fetchChapterImages();
  }, [chapterId]);

  if (!chapterDetails) return <p className='min-h-screen bg-matte-black text-2xl grid place-items-center font-demibold text-light'>Loading...</p>;

  return (
    <div className="w-full-6xl mx-auto px-5 md:px-16 py-10 md:py-20">
      <h1 className="text-4xl font-bold mb-4">{chapterDetails.title}</h1>
      <p className="text-lg mb-8 outfit">{chapterDetails.description}</p>
      {/* <p className="text-sm text-gray-500 mb-4">Published: {new Date(chapterDetails.release_date).toLocaleDateString()}</p> */}
      {posterUrl && (
        <img src={posterUrl} className='w-full object-cover' alt="" />
      )}
      <div className="grid grid-cols-1 md:grid-cols-1 bg-light p-0 md:p-5">
        {chapterImages.map((img, index) => (
          <img loading='lazy' key={index} src={img.image_url} alt={`Chapter Image ${index + 1}`} className="w-full h-auto object-cover" />
        ))}
      </div>
     <Link to={`/chapter/${parseInt(chapterId)+1}`}> <div className='w-full pt-5 flex justify-center'><CustomButton text={'Next Chapter'} color={'fill-fire-brick'} height='57' width='200' /></div></Link>
    </div>
  );
};

export default ChapterPage;
