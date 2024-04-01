import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import personajes from '../../assets/images/personajesCarrusel.jpeg';
import peliculas from '../../assets/images/peliculasCarrusel.jpg';
import planetas from '../../assets/images/planetasCarrusel.webp';
import { Header } from '../../components/Header';
import { Footer } from '../../components/Footer';
import { Link } from 'react-router-dom';

export const Home = () => {
  return (
    <main className="main-home">
      <Header />

      
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
          <Link to= "/peliculas">
          <img src={peliculas} />
          <p className="legend"><h1>Ver Peliculas</h1></p>
          </Link>
        </div>
        <div>
        <Link to= "/personajes">
          <img src={personajes} />
          <p className="legend"> <h1>Ver Personajes</h1></p>
          </Link>
        </div>
        <div>
        <Link to= "/planetas">
          <img src={planetas} />
          <p className="legend"> <h1>Ver Planetas</h1></p>
          </Link>
        </div>
      </Carousel>
      <Footer/>
      
    </main>
  );
};
