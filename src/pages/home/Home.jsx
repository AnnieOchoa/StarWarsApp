import React from 'react';
import logo from '../../assets/images/SW-logo.png';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import personajes from '../../assets/images/personajesCarrusel.jpeg';
import peliculas from '../../assets/images/peliculasCarrusel.jpg';
import planetas from '../../assets/images/planetasCarrusel.webp';
import { Link } from 'react-router-dom';
import { Header } from '../../components/Header';

export const Home = () => {
  return (
    <main className="main-home">
      <Header />

      <h1>Star Wars App</h1>
      <form className="main-home__form--form"></form>
      <Carousel
        autoPlay={true}
        centerMode={true}
        centerSlidePercentage="60"
        dynamicHeight={true}
        infiniteLoop={true}
        interval="2500"
        width="100%"
      >
        <div>
          <img src={peliculas} />
          <p className="legend">Peliculas</p>
        </div>
        <div>
          <img src={personajes} />
          <p className="legend">Personajes</p>
        </div>
        <div>
          <img src={planetas} />
          <p className="legend">Planetas</p>
        </div>
      </Carousel>
    </main>
  );
};
