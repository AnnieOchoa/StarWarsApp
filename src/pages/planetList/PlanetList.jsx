import { useContext, useEffect, useState } from 'react';
import { Header } from '../../components/Header';
import PlanetImages from '../../helpers/PlanetImages';
import PlanetCard from '../../components/PlanetCard';
import { SessionContext } from '../../context/SessionContext';
import { Footer } from '../../components/Footer';
import Swal from 'sweetalert2';

const Toast = Swal.mixin({
  toast: true,
  position: 'top-end',
  timer: 1500,
  timerProgressBar: true,
  showConfirmButton: false
});

export const PlanetList = () => {
  const [planets, setPlanets] = useState(null);
  const { sessionData, setSessionData } = useContext(SessionContext);

  const addPlanetToFavorites = (planet) => {
    setSessionData({
      ...sessionData, 
      favorites: {
        ...sessionData.favorites,
        ['planets']: [...sessionData.favorites.planets, planet],
      },
    });
    Toast.fire({
      icon: 'success',
      title: 'Se ha agregado a los favoritos'
    })
  };

  const getPlanets = async () => {
    const response = await fetch('https://swapi.dev/api/planets/');
    const { results } = await response.json();
    setPlanets(results);
  };

  useEffect(() => {
    getPlanets();
  }, []);

  return (
    <div className="planets">
      <Header />
      <main className="planets-main">
        <h1 className="planets-main__title">
          !Conoce los <span>Planetas</span>!
        </h1>
        <p className="planets-main__description">
          ¡Aquí encontraras algunos <span>planetas</span> de nuestro{' '}
          <span>universo</span>!
        </p>
        <section className="planets-main__cards container">
          {planets?.map((planet, index) => (
            <PlanetCard
              onClick={() => addPlanetToFavorites(planet)}
              name={planet.name}
              img={PlanetImages[planet.url.split('/')[5]]}
              climate={planet.climate}
              terrain={planet.terrain}
              residents={planet.residents?.length}
              population={planet.population}
              key={index}
            />
          ))}
        </section>
      </main>
      <Footer/>
    </div>
  );
};
