import { useRef } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/images/SW-logo.png';

export const Header = () => {
  const nav = useRef(null);
  const favorites = useRef(null);

  const toggleNav = () => {
    nav.current?.classList.toggle('show-navigation');
  };

  return (
    <header className="main-header">
      <div className="main-header__top">
        <button onClick={toggleNav}>
          <i className="uil uil-bars"></i>
        </button>
        <Link ref={favorites}>
          {' '}
          <span>
            <i className="uil uil-heart"></i>
          </span>
          Favoritos
        </Link>
        <img src={logo} alt="logo" />
        <div className="main-header__top-avatar">S</div>
      </div>

      <nav ref={nav} className="main-header__nav">
        <ul>
          <li>
            <Link to="/">HOME</Link>
          </li>
          <li>
            <Link>PELICULAS</Link>
          </li>
          <li>
            <Link to="/personajes">PERSONAJES</Link>
          </li>
          <li>
            <Link to="/planetas">PLANETAS</Link>
          </li>
          <li>
            <Link>FAVORITOS</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};
