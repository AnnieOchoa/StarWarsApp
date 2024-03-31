const cards = ({
  name,
  height,
  mass,
  hairColor,
  skinColor,
  eyeColor,
  birthYear,
  gender,
  image,
}) => {
  return (
    <article className="main-card">
      <div className="main-card__cover">
        <div className="main-card__cover__image">
          <img src={image} alt="imagen" />
        </div>

        <div className="main-card__cover__text">
          <h2>{name}</h2>
          <ul>
            <li>
              {' '}
              <strong>Altura:</strong> {height}{' '}
            </li>
            <li>
              {' '}
              <strong>Masa:</strong> {mass}{' '}
            </li>
            <li>
              {' '}
              <strong>Color de pelo:</strong> {hairColor}{' '}
            </li>
            <li>
              {' '}
              <strong>Color de piel:</strong> {skinColor}{' '}
            </li>
            <li>
              {' '}
              <strong>Color de ojos:</strong> {eyeColor}{' '}
            </li>
            <li>
              {' '}
              <strong>Año de nacimiento:</strong> {birthYear}{' '}
            </li>
            <li>
              {' '}
              <strong>Género:</strong> {gender}{' '}
            </li>
          </ul>
        </div>
        <button>Añadir a favoritos</button>
      </div>
    </article>
  );
};

export default cards;
