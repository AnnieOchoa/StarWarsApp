import { useContext, useEffect, useState } from 'react';
import { Header } from '../../components/Header';
import FilmsImages from '../../helpers/FilmsImages';
import FilmsCard from '../../components/FilmsCard';
import { Footer } from '../../components/Footer';
import { SessionContext } from '../../context/SessionContext';
import Swal from 'sweetalert2';

const Toast = Swal.mixin({
  toast: true,
  position: 'top-end',
  timer: 1500,
  timerProgressBar: true,
  showConfirmButton: false,
});

const FilmsList = () => {
  const [films, setFilms] = useState(null);
  const { sessionData, setSessionData } = useContext(SessionContext);

  const addFilmsToFavorites = (film) => {
    setSessionData({
      ...sessionData,
      favorites: {
        ...sessionData.favorites,
        ['movies']: [...sessionData.favorites.movies, film],
      },
    });
    Toast.fire({
      icon: 'success',
      title: 'Se ha agregado a los favoritos',
    });
  };

  useEffect(() => {
    fetch('https://swapi.dev/api/films/')
      .then((response) => response.json())
      .then(({ results }) => {
        setFilms(results);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);

  return (
    <div className="films">
      <Header />
      <main className="films-main">
        <h1 className="films-main__title">
          !Conoce las <span>Peliculas</span>!
        </h1>
        <p className="films-main__description">
          ¡Aquí encontraras algunas <span>peliculas</span> de nuestro{' '}
          <span>universo</span>!
        </p>
        <section className="films-main__cards container">
          {films?.map((film, index) => (
            <FilmsCard
              img={FilmsImages[film.url.split('/')[5]]}
              title={film.title}
              episode_id={film.episode_id}
              director={film.director}
              producer={film.producer}
              release_date={film.release_date}
              key={index}
              onClick={() => addFilmsToFavorites(film)}
            />
          ))}
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default FilmsList;
