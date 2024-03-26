const Button = ({ name, onClick, style = 'filled' }) => {
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
  return (
    <button className={getStyle()} onClick={onClick}>
      {name}
    </button>
  );
};

export default Button;
