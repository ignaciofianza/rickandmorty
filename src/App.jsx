import React, { useEffect, useState } from "react";
import NavbarComponent from "./components/NavbarComponent";
import CharacterContainer from "./components/CharacterContainer";
import Pagination from "./components/Pagination";
import CharacterDetailsPopup from "./components/CharacterDetailsPopup";

function App() {
  const [characters, setCharacters] = useState([]);
  const [pagination, setPagination] = useState({});
  const [selectedCharacter, setSelectedCharacter] = useState(null);

  const fetchCharacters = async (url) => {
    const res = await fetch(url);
    const data = await res.json();
    setCharacters(data.results);
    setPagination(data.info);
  };

  useEffect(() => {
    fetchCharacters("https://rickandmortyapi.com/api/character/");
  }, []);

  const onNext = () => {
    fetchCharacters(pagination.next);
  };

  const onPrev = () => {
    fetchCharacters(pagination.prev);
  };

  const handleCardClick = (character) => {
    setSelectedCharacter(character); // Al hacer clic, se selecciona el personaje
  };

  const handleClosePopup = () => {
    setSelectedCharacter(null); // Cierra el pop-up
  };

  return (
    <>
      <NavbarComponent />
      <div className="container">
        <Pagination onNext={onNext} onPrev={onPrev} pagination={pagination} />
        <CharacterContainer
          characters={characters}
          onClick={handleCardClick} // Pasamos la función al contenedor de los personajes
        />
        <Pagination onNext={onNext} onPrev={onPrev} pagination={pagination} />
      </div>

      {/* Mostrar el modal de Bootstrap si hay un personaje seleccionado */}
      {selectedCharacter && (
        <CharacterDetailsPopup
          character={selectedCharacter}
          onClose={handleClosePopup}
        />
      )}
    </>
  );
}

export default App;
