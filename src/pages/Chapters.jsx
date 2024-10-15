import { useEffect, useState } from 'react';
import { supabase } from '../client/supabaseClient';  // Path to your Supabase client file
import { useParams } from 'react-router-dom';

const ChapterPage = () => {
    const { chapterId } = useParams(); // Getting the character ID from the URL

  const [chapterDetails, setChapterDetails] = useState(null);
  const [chapterImages, setChapterImages] = useState([]);

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

  if (!chapterDetails) return <p>Loading...</p>;

  return (
    <div className="w-full-6xl mx-auto px-16 py-20">
      <h1 className="text-4xl font-bold mb-4">{chapterDetails.title}</h1>
      <p className="text-lg mb-8">{chapterDetails.description}</p>
      <p className="text-sm text-gray-500 mb-4">Published: {new Date(chapterDetails.release_date).toLocaleDateString()}</p>
      <div className="grid grid-cols-1 md:grid-cols-2 bg-white p-5">
        {chapterImages.map((img, index) => (
          <img key={index} src={img.image_url} alt={`Chapter Image ${index + 1}`} className="w-full h-auto object-cover" />
        ))}
      </div>
    </div>
  );
};

export default ChapterPage;
