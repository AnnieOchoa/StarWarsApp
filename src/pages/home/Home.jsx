import React from 'react'
import logo from '../../assets/images/SW-logo.png';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import  personajes  from '../../assets/images/personajesCarrusel.jpeg';
import  peliculas  from '../../assets/images/peliculasCarrusel.jpg';
import  planetas  from '../../assets/images/planetasCarrusel.webp';

export const Home = () => {
  return (
    <main className="main-home" >
      <img src={logo} alt="logo" />

      <nav className="nav-home">
        <ul className='nav-list'>
        <li><a href='#'>HOME</a></li>
        <li><a href='#'>PELICULAS</a></li>
        <li><a href='#'>PERSONAJES</a></li>
        <li><a href='#'>PLANETAS</a></li>
        </ul>
      </nav>

      <h1>Star Wars App</h1>
      <form className="main-home__form--form">
      </form>
      <Carousel autoPlay={true} centerMode={true} centerSlidePercentage="60" dynamicHeight={true} infiniteLoop={true} interval="2500" width="100%">
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
    <section className="main-home__img"></section> 
  </main>

  
  )
}


