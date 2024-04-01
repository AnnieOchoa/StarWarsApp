const FilmsCard = ({ img, title, episode_id, director, producer, release_date, onClick }) => {
    return (
      <article className="films-card">
        <img src={img} alt={title} />
        <h3>{title}</h3>
        <p>
          {' '}
          <strong>Episodio: </strong>
          {episode_id}{' '}
        </p>
        <p>
          {' '}
          <strong>Director: </strong>
          {director}{' '}
        </p>
        <p>
          {' '}
          <strong>Productor: </strong>
          {producer}{' '}
        </p>
        <p>
          <strong>Fecha de lanzamiento</strong> {release_date}
        </p>
        <button onClick={onClick}>Añadir a Favoritos</button>
      </article>
    );
  };
  
  export default FilmsCard;