import { useEffect, useState } from 'react';
import { Header } from '../../components/Header';
import PlanetImages from '../../helpers/PlanetImages';
import PlanetCard from '../../components/PlanetCard';

export const PlanetList = () => {
  const [planets, setPlanets] = useState(null);

  const getPlanets = async () => {
    const response = await fetch('https://swapi.dev/api/planets/');
    const { results } = await response.json();
    console.log(results);
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
              name={planet.name}
              img={PlanetImages[index]}
              climate={planet.climate}
              terrain={planet.terrain}
              residents={planet.residents?.length}
              population={planet.population}
              key={index}
            />
          ))}
        </section>
      </main>
    </div>
  );
};
