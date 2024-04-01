/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useRef } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import logo from '../assets/images/SW-logo.png';
import Swal from 'sweetalert2';

export const Header = () => {
  const nav = useRef(null);
  const homeBtn = useRef(null);
  const moviesBtn = useRef(null);
  const charactersBtn = useRef(null);
  const planetsBstn = useRef(null);
  const favBtn = useRef(null);
  const { pathname } = useLocation();
  const navigate = useNavigate();

  const toggleNav = () => {
    nav.current?.classList.toggle('show-navigation');
  };

  const cleanBtns = () => {
    [homeBtn, moviesBtn, charactersBtn, planetsBstn].forEach((item) =>
      item.current?.classList.remove('active_navlink'),
    );
  };

  const setActiveLink = (link) => {
    cleanBtns();
    link.current?.classList.add('active_navlink');
  };
  const sessionData = JSON.parse(window.localStorage.getItem('sessionInfo'));

  const cleanSession = () => {
    window.localStorage.removeItem('sessionInfo');
    navigate('/auth/login');
  };

  const signout = () => {
    Swal.fire({
      title: 'Cerrar Sesión',
      text: `¿Deseas cerrar la sesión de ${sessionData.email} ?`,
      icon: 'question',
      confirmButtonText: 'Cerrar sesión',
      cancelButtonText: 'Cancelar',
      showCancelButton: true,
    }).then(cleanSession);
  };

  useEffect(() => {
    pathname === '/' && setActiveLink(homeBtn);
    pathname === '/peliculas' && setActiveLink(moviesBtn);
    pathname === '/personajes' && setActiveLink(charactersBtn);
    pathname === '/planetas' && setActiveLink(planetsBstn);
    pathname === '/favoritos' && setActiveLink(favBtn);
  }, [location]);

  return (
    <header className="main-header">
      <div className="main-header__top">
        <button onClick={toggleNav}>
          <i className="uil uil-bars"></i>
        </button>
        <Link to="/favoritos" ref={favBtn}>
          <span>
            <i className="uil uil-heart"></i>
          </span>
          Favoritos
        </Link>
        <img src={logo} alt="logo" />
        <button onClick={signout} className="main-header__top-avatar">
          {sessionData?.email?.slice(0, 1).toUpperCase()}
        </button>
      </div>

      <nav ref={nav} className="main-header__nav">
        <ul>
          <li>
            <Link ref={homeBtn} to="/">
              HOME
            </Link>
          </li>
          <li>
            <Link ref={moviesBtn} to="/peliculas">
              PELICULAS
            </Link>
          </li>
          <li>
            <Link ref={charactersBtn} to="/personajes">
              PERSONAJES
            </Link>
          </li>
          <li>
            <Link ref={planetsBstn} to="/planetas">
              PLANETAS
            </Link>
          </li>
          <li>
            <Link ref={favBtn} to="/favoritos">
              FAVORITOS
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};
