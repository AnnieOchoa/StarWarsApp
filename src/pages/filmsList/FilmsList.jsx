import React from 'react'
import { useEffect, useState } from 'react';
import { Header } from '../../components/Header';
import FilmsImages from '../../helpers/FilmsImages';
import FilmsCard from '../../components/FilmsCard';
import { Footer } from '../../components/Footer';

const FilmsList = () => {
    const [films, setFilms] = useState(null);

    useEffect(() => {
        fetch('https://swapi.dev/api/films/')
            .then((response) => response.json())
            .then((data) => {
                setFilms(data.results.map(film => film));
            })
            .catch((err) => {
                console.log(err.message);
            }).then(()=> {
                console.log(films);
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
                img={FilmsImages[index]}
                title={film.title}
                episode_id={film.episode_id}
                director={film.director}
                producer={film.producer}
                release_date={film.release_date}
                key={index}
              />
            ))}
          </section>
        </main>
        <Footer/>
      </div>
    );
  
}

export default FilmsList
