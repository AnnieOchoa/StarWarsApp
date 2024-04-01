import Cards from '../../components/Cards';
import { useState, useEffect, useContext } from 'react';
import characterImages from '../../helpers/CharacterImages';
import { Header } from '../../components/Header';
import { SessionContext } from '../../context/SessionContext';
import { Footer } from '../../components/Footer';
import Swal from 'sweetalert2';

const Toast = Swal.mixin({
  toast: true,
  position: 'top-end',
  timer: 1500,
  timerProgressBar: true,
  showConfirmButton: false,
});

const CharactersList = () => {
  const [data, setData] = useState(null);
  const { setSessionData, sessionData } = useContext(SessionContext);

  const addToFavorites = (character) => {
    setSessionData({
      ...sessionData,
      favorites: {
        ...sessionData.favorites,
        ['characters']: [...sessionData.favorites.characters, character],
      },
    });
    Toast.fire({
      icon: 'success',
      title: 'Se ha agregado a los favoritos',
    });
  };

  useEffect(() => {
    fetch('https://swapi.dev/api/people/')
      .then((response) => response.json())
      .then((data) => setData(data.results));
  }, []);

  return (
    <>
      <main className="main-list">
        <Header />
        <div className="main-list-wrapper container">
          <div className="main-list-wrapper__heading">
            <h1>
              ¡Conoce los <span>Personajes</span>!
            </h1>
            <p>
              ¡Aquí encontraras algunos <strong>héroes</strong> y{' '}
              <strong>villanos</strong> de esta historia!
            </p>
          </div>

          <div className="main-list-wrapper__cards">
            {data?.map((character, index) => (
              <Cards
                key={index}
                image={characterImages[character.url.split('/')[5]]}
                name={character.name}
                height={character.height}
                mass={character.mass}
                hairColor={character.hair_color}
                skinColor={character.skin_color}
                eyeColor={character.eye_color}
                birthYear={character.birth_year}
                gender={character.gender}
                onClick={() => addToFavorites(character)}
              />
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default CharactersList;
