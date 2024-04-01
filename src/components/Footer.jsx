import logo from '../assets/images/Blanco-logo.png';
import { Link } from 'react-router-dom';


export const Footer = () => {
  return <footer className="main-footer">
    <div className="main-footer__top">
    <img src={logo} alt="logo" />
    <Link>
          <span>
          <i className="uil uil-facebook-f"></i>
          </span>
          Facebook
        </Link>
        <Link>
          <span>
          <i className="uil uil-instagram"></i>
          </span>
          Intagram
        </Link>
        <Link>
          <span>
          <i className="uil uil-twitter"></i>
          </span>
          Twitter
        </Link>
        <Link>
          <span>
          <i className="uil uil-youtube"></i>
          </span>
          YouTube
        </Link>
    </div>
  </footer>
};
