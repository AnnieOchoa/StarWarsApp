import { Link } from 'react-router-dom';

const Button = ({ name, onClick, style = 'filled', path, type }) => {
  const getStyle = () => {
    if (style === 'filled') {
      return 'filled-btn';
    }
    if (style === 'outlined') {
      return 'outlined-btn';
    }
    if (style === 'text') {
      return 'text-btn';
    }
  };

  if (path) {
    return (
      <Link className={getStyle()} to={path}>
        {name}
      </Link>
    );
  }
  return (
    <button className={getStyle()} onClick={onClick} type={type}>
      {name}
    </button>
  );
};

export default Button;
