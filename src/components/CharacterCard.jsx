const CharacterCard = ({ item, onClick }) => {
  const { location, image, species, name } = item;

  return (
    <div className="col-12 col-md-3 mb-4 mt-3" onClick={() => onClick(item)}>
      <div className="card bg-dark text-white shadow-lg border-0 rounded-4 overflow-hidden h-100">
        <img src={image} alt={name} className="card-img-top" />
        <div className="card-body d-flex flex-column justify-content-between p-4">
          <h5 className="card-title text-info mb-3">{name}</h5>
          <hr className="border-light" />
          <p className="card-text">
            <span className="fw-bold text-warning">Especie:</span> {species}
          </p>
          <p className="card-text">
            <span className="fw-bold text-warning">Localización:</span>{" "}
            {location.name}
          </p>
        </div>
      </div>
    </div>
  );
};

export default CharacterCard;
