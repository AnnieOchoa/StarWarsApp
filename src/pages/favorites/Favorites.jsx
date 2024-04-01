import { Header } from '../../components/Header';
import Card from '../../components/Cards';
import { useContext, useEffect, useRef, useState } from 'react';
import { SessionContext } from '../../context/SessionContext';
import characterImages from '../../helpers/CharacterImages';
import PlanetCard from '../../components/PlanetCard';
import PlanetImages from '../../helpers/PlanetImages';
import { Footer } from '../../components/Footer';
import FilmsCard from '../../components/FilmsCard';
import FilmsImages from '../../helpers/FilmsImages';

const Favorites = () => {
  const { sessionData } = useContext(SessionContext);
  const [activeTab, setActiveTab] = useState('personajes');
  const characterButton = useRef(null);
  const movieButton = useRef(null);
  const planetButton = useRef(null);

  const cleanAllBtns = () => {
    [characterButton, movieButton, planetButton].forEach((btn) => {
      btn.current?.classList.remove('active-favorite-btn');
    });
  };

  useEffect(() => {
    if (activeTab === 'personajes') {
      cleanAllBtns();
      characterButton.current?.classList.add('active-favorite-btn');
    }
    if (activeTab === 'peliculas') {
      cleanAllBtns();
      movieButton.current?.classList.add('active-favorite-btn');
    }
    if (activeTab === 'planetas') {
      cleanAllBtns();
      planetButton.current?.classList.add('active-favorite-btn');
    }
  }, [activeTab]);

  const activateTab = (tab) => {
    setActiveTab(tab);
  };
  return (
    <div className="favorites-wrapper">
      <Header />
      <main className="favorites-wrapper__main container">
        <div className="favorites-wrapper__main-jumplink">
          <button
            ref={characterButton}
            onClick={() => activateTab('personajes')}
          >
            Personajes
          </button>
          <button ref={movieButton} onClick={() => activateTab('peliculas')}>
            Peliculas
          </button>
          <button ref={planetButton} onClick={() => activateTab('planetas')}>
            Planetas
          </button>
        </div>
        <section className="favorites-wrapper__main-cards">
          {activeTab === 'personajes' &&
            sessionData.favorites.characters?.map((character, index) => (
              <div key={index}>
                <Card
                  name={character.name}
                  height={character.height}
                  mass={character.mass}
                  hairColor={character.hair_color}
                  skinColor={character.skin_color}
                  eyeColor={character.eye_color}
                  birthYear={character.birth_year}
                  gender={character.gender}
                  image={characterImages[character.url.split('/')[5]]}
                />
              </div>
            ))}
          {activeTab === 'peliculas' && (
            sessionData.favorites.movies?.map((film, index) => (
              <div key={index}>
                <FilmsCard 
                   img={FilmsImages[film.url.split('/')[5]]}
                   title={film.title}
                   episode_id={film.episode_id}
                   director={film.director}
                   producer={film.producer}
                   release_date={film.release_date}
                   key={index}
                />
              </div>
            ))
          )}
          {activeTab === 'planetas' &&
            sessionData.favorites.planets?.map((planet, index) => (
              <div key={index}>
                <PlanetCard
                  name={planet.name}
                  img={PlanetImages[planet.url.split('/')[5]]}
                  climate={planet.climate}
                  terrain={planet.terrain}
                  residents={planet.residents?.length}
                  population={planet.population}
                />
              </div>
            ))}
          {activeTab === 'personajes' &&
            sessionData.favorites.characters.length === 0 && (
              <section className="favorites-empty-state">
                <h3>No has agregado ningún personaje a tus favoritos</h3>
              </section>
            )}
          {activeTab === 'peliculas' &&
            sessionData.favorites.movies.length === 0 && (
              <section className="favorites-empty-state">
                <h3>No has agregado ninguna película a tus favoritos</h3>
              </section>
            )}
          {activeTab === 'planetas' &&
            sessionData.favorites.planets.length === 0 && (
              <section className="favorites-empty-state">
                <h3>No has agregado ningún planeta a tus favoritos</h3>
              </section>
            )}
        </section>
      </main>
      <Footer/>
    </div>
  );
};

export default Favorites;
