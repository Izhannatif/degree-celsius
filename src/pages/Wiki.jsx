import React, { useEffect, useState } from 'react'
import { supabase } from '../client/supabaseClient';
import { Link } from 'react-router-dom';
import { IoArrowForwardCircleOutline } from 'react-icons/io5';

const Wiki = () => {
    const [characters, setCharacters] = useState([]);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        const fetchData = async () => {
            try {
                // Fetch characters
                const { data: charactersData, error: charactersError } = await supabase
                    .from('characters')
                    .select('id, name, character_image2_url');
                if (charactersError) throw charactersError;
                console.log(charactersData)
                setCharacters(charactersData);

            } catch (error) {
                console.error('Error fetching data:', error.message);
            } finally {
                setLoading(false);
            }
        }
        fetchData();
    }, []);

    if (loading) return <div className='min-h-screen bg-matte-black text-2xl grid place-items-center font-demibold text-light'>Loading...</div>;

    return (
        <section className='w-full h-full p-10'>
            <div className=' flex flex-col'>
                <div className='text-3xl font-bold text-matte-black'>Characters</div>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-full py-10 gap-5'>

                    {
                        characters.map((character) => (
                            <div key={character.id} className='w-9/12 flex flex-col gap-5 '>
                                <img src={character.character_image2_url} className="md:h-[50vh] object-contain" />
                                {/* <div className='text-lg font-demibold '>{character.name}</div> */}
                                <div className="px-5 flex justify-between items-center">
                                    <h3 className="text-lg text-matte-black font-regular">{character.name}</h3>
                                    <Link to={character.id ? `/character/${character.id}` : null} ><IoArrowForwardCircleOutline size={40} className='-rotate-45 text-midnight-blue hover:rotate-[360deg] transition-all duration-300 hover:scale-110' /></Link>
                                </div>
                            </div>
                        )
                        )}

                </div>
            </div>
        </section>
    )
}

export default Wiki