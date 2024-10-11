import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { supabase } from '../client/supabaseClient';

const CharacterPage = () => {
    const { characterId } = useParams(); // Getting the character ID from the URL
    const [character, setCharacter] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [abilities, setAbilities] = useState([]);
    const [relationships, setRelationships] = useState([]);
    const [quotes, setQuotes] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                // Fetch character details
                const { data: characterData, error: characterError } = await supabase
                    .from('characters')
                    .select('*')
                    .eq('id', characterId)
                    .single();

                if (characterError) throw characterError;
                setCharacter(characterData);

                // Fetch character abilities
                const { data: abilitiesData, error: abilitiesError } = await supabase
                    .from('abilities')
                    .select('*')
                    .eq('character_id', characterId);

                if (abilitiesError) throw abilitiesError;
                setAbilities(abilitiesData);

                // Fetch character relationships
                const { data: relationshipsData, error: relationshipsError } = await supabase
                    .from('relationships')
                    .select(`
                        id,
                        relationship_description,
                        characters:related_to (name)
                    `)
                    .eq('character_id', characterId);

                if (relationshipsError) throw relationshipsError;
                setRelationships(relationshipsData);

                // Fetch character quotes
                const { data: quotesData, error: quotesError } = await supabase
                    .from('quotes')
                    .select('*')
                    .eq('character_id', characterId);

                if (quotesError) throw quotesError;
                setQuotes(quotesData);

                setLoading(false);
            } catch (error) {
                setError(error.message);
                setLoading(false);
            }
        };

        fetchData();
    }, [characterId]);

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error}</div>;

    return (
        <>
            <section className='flex flex-col p-20 bg-white'>
                <div className='w-full h-max flex justify-between gap-10'>
                    <div className='w-1/2 flex flex-col gap-5'>
                        <h1 className="text-3xl font-bold">{character.name}</h1>
                        <p className='text-xl outfit'>{character.about}</p>
                        <div className="flex flex-col gap-5">
                            <h2 className="text-2xl font-demibold">Appearance</h2>
                            <p className='outfit text-xl'>{character.appearance}</p>
                        </div>
                        <img src={character.character_image_url} alt={character.name} className="max-h-[60vh] object-contain" />
                    </div>
                    <div className='w-1/3 grid place-items-center'>
                        <img src={character.character_image2_url} alt={character.name} className="w-3/4 object-cover" />
                        <div className="w-3/4 border border-fire-brick">
                            <div className="flex flex-col gap-0">
                                <div className="flex justify-between bg-tacao px-2 py-3 ">
                                    <strong>Age</strong>
                                    <span className="outfit text-light ">{`${!character.age ? "Unknown" : character.age}`}</span>
                                </div>
                                <hr className='border-fire-brick' />
                                <div className="flex justify-between bg-tacao px-2 py-3">
                                    <strong>Birthday</strong>
                                    <span className="outfit  text-light">{`${!character.birthday ? "Unknown" : character.birthday}`}</span>
                                </div>
                                <hr className='border-fire-brick' />
                                <div className="flex justify-between bg-tacao px-2 py-3">
                                    <strong>Gender</strong>
                                    <span className="outfit  text-light">{`${!character.gender? "Unknown" : character.gender}`}</span>
                                </div>
                                <hr className='border-fire-brick' />
                                <div className="flex justify-between bg-tacao px-2 py-3">
                                    <strong>Height</strong>
                                    <span className="outfit  text-light">{`${!character.height? "Unknown" : character.height + " cm"}`}</span>
                                </div>
                                <hr className='border-fire-brick' />
                                <div className="flex justify-between bg-tacao px-2 py-3">
                                    <strong>Weight</strong>
                                    <span className="outfit  text-light">{`${!character.weight? "Unknown" : character.weight + " cm"}`}</span>
                                </div>
                                <hr className='border-fire-brick' />
                                <div className="flex justify-between bg-tacao px-2 py-3">
                                    <strong>Nationality</strong>
                                    <span className="outfit  text-light">{`${!character.nationality ? "Unknown" : character.nationality}`}</span>
                                </div>
                                <hr className='border-fire-brick' />
                                <div className="flex justify-between bg-tacao px-2 py-3">
                                    <strong>Occupation</strong>
                                    <span className="outfit  text-light">{`${!character.occupation? "Unknown" : character.occupation}`}</span>
                                </div>
                                <hr className='border-fire-brick' />
                                <div className="flex justify-between bg-tacao px-2 py-3">
                                    <strong>Manga Debut</strong>
                                    <span className="outfit  text-light">Chapter {character.manga_debut}</span>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
                <div className='w-full '>
                    <div className="mb-6">
                        <h2 className="text-2xl font-demibold pb-5">Personality</h2>
                        <p>{character.personality}</p>
                    </div>
                    <div className="mb-6">
                        <h2 className="text-2xl font-demibold pb-5">Abilities</h2>
                        {abilities.map(ability => (
                            <div key={ability.id} className="mb-2">
                                <h3 className="text-xl outfit font-bold p-2">{ability.ability_name}</h3>
                                <p className='outfit text-lg p-2'>{ability.description}</p>
                            </div>
                        ))}
                    </div>
                    <div className="mb-6">
                        <h2 className="text-2xl font-demibold pb-5">Relationships</h2>
                        {relationships.map(rel => (
                            <div key={rel.id} className="mb-2">
                                <h3 className="font-bold text-xl outfit p-2">{rel.characters.name}</h3>
                                <p className='text-lg outfit p-2'>{rel.relationship_description}</p>
                            </div>
                        ))}
                    </div>
                    <div className="mb-6">
                        <h2 className="text-2xl font-semibold">Quotes</h2>
                        {quotes.map(quote => (
                            <div key={quote.id} className="mb-2">
                                <p>{quote.text}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

        </>
    );
};

export default CharacterPage;
