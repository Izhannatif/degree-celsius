import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { supabase } from "../client/supabaseClient";

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
          .from("characters")
          .select("*")
          .eq("id", characterId)
          .single();

        if (characterError) throw characterError;
        setCharacter(characterData);
        console.log(characterData);

        // Fetch character abilities
        const { data: abilitiesData, error: abilitiesError } = await supabase
          .from("abilities")
          .select("*")
          .eq("character_id", characterId);

        if (abilitiesError) throw abilitiesError;
        setAbilities(abilitiesData);

        // Fetch character relationships
        const { data: relationshipsData, error: relationshipsError } =
          await supabase
            .from("relationships")
            .select(
              `
                        id,
                        relationship_description,
                        character_id,
                        related_to,
                        characters:related_to (name)
                    `
            )
            .eq("character_id", characterId);

        if (relationshipsError) throw relationshipsError;
        console.log(relationshipsData);
        setRelationships(relationshipsData);

        // Fetch character quotes
        const { data: quotesData, error: quotesError } = await supabase
          .from("quotes")
          .select("*")
          .eq("character_id", characterId);

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

  if (loading)
    return (
      <div className="min-h-screen bg-matte-black text-2xl grid place-items-center font-demibold text-light">
        Loading...
      </div>
    );
  if (error)
    return (
      <div className="min-h-screen bg-matte-black text-2xl grid place-items-center font-bold outfit text-light">
        Error: {error}
      </div>
    );

  return (
    <>

      {/* DESKTOP VIEW */}

      <section className="flex md:hidden flex-col p-5 bg-white items-center">
        <img
          src={character.character_image2_url}
          alt={character.name}
          className="w-1/2 object-cover"
        />
        <div className="w-full flex flex-col gap-5 py-5 text-justify">
          <h1 className="text-2xl font-bold">{character.name}</h1>
          <p className="text-lg outfit">{character.about}</p>
          <div className="flex flex-col gap-5">
            <h2 className="text-2xl font-demibold">Appearance</h2>
            <p className="outfit text-lg">{character.appearance}</p>
          </div>
        </div>

        <div className="w-full grid place-items-center py-5">
          <div className="w-full border border-fire-brick">
            <div className="flex flex-col gap-0">
              <div className="flex justify-between bg-tacao px-2 py-3 ">
                <strong>Age</strong>
                <span className="outfit text-light ">{`${!character.age ? "Unknown" : character.age
                  }`}</span>
              </div>
              <hr className="border-fire-brick" />
              <div className="flex justify-between bg-tacao px-2 py-3">
                <strong>Birthday</strong>
                <span className="outfit  text-light">{`${!character.birthday ? "Unknown" : String(character.birthday).slice(0, 4)
                  }`}</span>
              </div>
              <hr className="border-fire-brick" />
              <div className="flex justify-between bg-tacao px-2 py-3">
                <strong>Gender</strong>
                <span className="outfit  text-light">{`${!character.gender ? "Unknown" : character.gender
                  }`}</span>
              </div>
              <hr className="border-fire-brick" />
              <div className="flex justify-between bg-tacao px-2 py-3">
                <strong>Height</strong>
                <span className="outfit  text-light">{`${!character.height ? "Unknown" : character.height + " cm"
                  }`}</span>
              </div>
              <hr className="border-fire-brick" />
              <div className="flex justify-between bg-tacao px-2 py-3">
                <strong>Weight</strong>
                <span className="outfit  text-light">{`${!character.weight ? "Unknown" : character.weight + " cm"
                  }`}</span>
              </div>
              <hr className="border-fire-brick" />
              <div className="flex justify-between bg-tacao px-2 py-3">
                <strong>Nationality</strong>
                <span className="outfit  text-light">{`${!character.nationality ? "Unknown" : character.nationality
                  }`}</span>
              </div>
              <hr className="border-fire-brick" />
              <div className="flex justify-between bg-tacao px-2 py-3">
                <strong>Occupation</strong>
                <span className="outfit  text-light">{`${!character.occupation ? "Unknown" : character.occupation
                  }`}</span>
              </div>
              <hr className="border-fire-brick" />
              <div className="flex justify-between bg-tacao px-2 py-3">
                <strong>Manga Debut</strong>
                <span className="outfit  text-light">
                  Chapter {character.manga_debut}
                </span>
              </div>
            </div>
          </div>
          <img
            src={character.character_image_url}
            alt={character.name}
            className="max-h-[60vh] object-contain py-5"
          />
        </div>

        <div className="w-full ">
          <div className="mb-6">
            <h2 className="text-2xl font-demibold pb-5">Personality</h2>
            <p className="outfit text-xl text-justify">
              {character.personality}
            </p>
          </div>
          {character.backstory &&
            <div className="mb-6">
              <h2 className="text-2xl font-demibold pb-5">Backstory</h2>
              <p className="outfit text-xl text-justify">
                {character.backstory}
              </p>
            </div>
          }
          {
            character.character_image3_url &&
            <img
              src={character.character_image3_url}
              alt={character.name}
              className="max-h-[60vh] object-contain py-5"
            />
          }
          {abilities && (
            <div className="mb-6">
              <h2 className="text-2xl font-demibold pb-5">Abilities</h2>
              {abilities.map((ability) => (
                <div key={ability.id} className="mb-2">
                  <h3 className="text-xl outfit font-bold p-2">
                    {ability.ability_name}
                  </h3>
                  <p className="outfit text-lg p-2">{ability.description}</p>
                </div>
              ))}
            </div>
          )}
          <div className="mb-6">
            <h2 className="text-2xl font-demibold pb-5">Relationships</h2>
            {relationships.map((rel) => (
              <div key={rel.id} className="mb-2">
                {rel.related_to && (
                  <Link to={`/character/${rel.related_to}`}>
                    {" "}
                    <h3 className="font-bold text-xl outfit p-2 w-full">
                      {rel.characters.name}
                    </h3>
                  </Link>
                )}
                <p className="text-lg outfit p-2">
                  {rel.relationship_description}
                </p>
              </div>
            ))}
          </div>
          <div className="mb-6">
            <h2 className="text-2xl font-demibold pb-5">Quotes</h2>
            {quotes.map((quote) => (
              <div key={quote.id} className="mb-2">
                <p className="outfit">
                  "{quote.quote}" -{" "}
                  <span className="capitalize text-fire-brick underline">
                    {" "}
                    <Link to={`/chapter/${quote.chapter_id}`}>
                      {" "}
                      chapter {quote.chapter_id}
                    </Link>
                  </span>
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>




      {/* MOBILE VIEW */}



      <section className="hidden md:flex flex-col p-20 bg-white">
        <div className="w-full h-max flex justify-between gap-10">
          <div className="w-1/2 flex flex-col gap-5">
            <h1 className="text-3xl font-bold">{character.name}</h1>
            <p className="text-xl outfit">{character.about}</p>
            <div className="flex flex-col gap-5">
              <h2 className="text-2xl font-demibold">Appearance</h2>
              <p className="outfit text-xl">{character.appearance}</p>
              <img
                src={character.character_image_url}
                alt={character.name}
                className="max-h-[60vh] object-contain"
              />
            </div>
          </div>
          <div className="w-1/3 grid place-items-center">
            <img
              src={character.character_image2_url}
              alt={character.name}
              className="w-3/4 object-cover"
            />
            <div className="w-3/4 border border-fire-brick">
              <div className="flex flex-col gap-0">
                <div className="flex justify-between bg-tacao px-2 py-3 ">
                  <strong>Age</strong>
                  <span className="outfit text-light ">{`${!character.age ? "Unknown" : character.age
                    }`}</span>
                </div>
                <hr className="border-fire-brick" />
                <div className="flex justify-between bg-tacao px-2 py-3">
                  <strong>Birthday</strong>
                  <span className="outfit  text-light">{`${!character.birthday ? "Unknown" : String(character.birthday).slice(0, 4)
                    }`}</span>
                </div>
                <hr className="border-fire-brick" />
                <div className="flex justify-between bg-tacao px-2 py-3">
                  <strong>Gender</strong>
                  <span className="outfit  text-light">{`${!character.gender ? "Unknown" : character.gender
                    }`}</span>
                </div>
                <hr className="border-fire-brick" />
                <div className="flex justify-between bg-tacao px-2 py-3">
                  <strong>Height</strong>
                  <span className="outfit  text-light">{`${!character.height ? "Unknown" : character.height + " cm"
                    }`}</span>
                </div>
                <hr className="border-fire-brick" />
                <div className="flex justify-between bg-tacao px-2 py-3">
                  <strong>Weight</strong>
                  <span className="outfit  text-light">{`${!character.weight ? "Unknown" : character.weight + " cm"
                    }`}</span>
                </div>
                <hr className="border-fire-brick" />
                <div className="flex justify-between bg-tacao px-2 py-3">
                  <strong>Nationality</strong>
                  <span className="outfit  text-light">{`${!character.nationality ? "Unknown" : character.nationality
                    }`}</span>
                </div>
                <hr className="border-fire-brick" />
                <div className="flex justify-between bg-tacao px-2 py-3">
                  <strong>Occupation</strong>
                  <span className="outfit  text-light">{`${!character.occupation ? "Unknown" : character.occupation
                    }`}</span>
                </div>
                <hr className="border-fire-brick" />
                <div className="flex justify-between bg-tacao px-2 py-3">
                  <strong>Manga Debut</strong>
                  <span className="outfit  text-light">
                    Chapter {character.manga_debut}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full ">
          <div className="mb-6">
            <h2 className="text-2xl font-demibold pb-5">Personality</h2>
            <p className="outfit text-xl text-justify">
              {character.personality}
            </p>
          </div>
          {character.backstory &&
            <div className="mb-6">
              <h2 className="text-2xl font-demibold pb-5">Backstory</h2>
              <p className="outfit text-xl text-justify">
                {character.backstory}
              </p>
            </div>
          }
          {
            character.character_image3_url &&
            <img
              src={character.character_image3_url}
              alt={character.name}
              className="max-h-[60vh] object-contain py-5"
            />
          }
          {abilities.length > 0 && (
            <div className="mb-6">
              <h2 className="text-2xl font-demibold pb-5">Abilities</h2>
              {abilities.map((ability) => (
                <div key={ability.id} className="mb-2">
                  <h3 className="text-xl outfit font-bold p-2">
                    {ability.ability_name}
                  </h3>
                  <p className="outfit text-lg p-2">{ability.description}</p>
                </div>
              ))}
            </div>
          )}
          {
            character.character_image4_url &&
            <img
              src={character.character_image4_url}
              alt={character.name}
              className="max-h-[60vh] object-contain py-5"
            />
          }
          <div className="mb-6">
            <h2 className="text-2xl font-demibold pb-5">Relationships</h2>
            {relationships.map((rel) => (
              <div key={rel.id} className="mb-2">
                {rel.related_to && (
                  <Link to={`/character/${rel.related_to}`}>
                    {" "}
                    <h3 className="font-bold text-xl outfit p-2 w-full">
                      {rel.characters.name}
                    </h3>
                  </Link>
                )}
                {rel.relationship_description &&
                  <p className="text-lg outfit p-2">
                    {rel.relationship_description}
                  </p>
                }
              </div>
            ))}
          </div>
          {quotes.length > 0 && (
            <div className="mb-6">
              <h2 className="text-2xl font-demibold pb-5">Quotes</h2>
              {quotes.map((quote) => (
                <div key={quote.id} className="mb-2">
                  <p className="outfit text-lg">
                    "{quote.quote}" -{" "}
                    <span className="capitalize text-fire-brick underline">
                      {" "}
                      <Link to={`/chapter/${quote.chapter_id}`}>
                        {" "}
                        chapter {quote.chapter_id}
                      </Link>
                    </span>
                  </p>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  );
};

export default CharacterPage;
