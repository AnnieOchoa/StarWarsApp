const PlanetCard = ({img, name, climate, terrain, residents, population }) => {
  return (
    <article className="planet-card">
        <img src={img} alt={name} />
        <h3>{name}</h3>
        <p> <strong>Clima: </strong>{climate} </p>
        <p> <strong>Terreno: </strong>{terrain} </p>
        <p> <strong>Residentes: </strong>{residents} </p>
        <p><strong>Población</strong> {population}</p>
    </article>
  )
}

export default PlanetCard