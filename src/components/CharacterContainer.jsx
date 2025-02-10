import React, { useState, useEffect } from "react";
import { MoonLoader } from "react-spinners"; // Importamos el spinner
import CharacterCard from "./CharacterCard";

const CharacterContainer = ({ characters, onClick }) => {
  const [isLoading, setIsLoading] = useState(true);

  // Usamos useEffect para poner el retraso en la carga
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 500); // Retraso de 500ms

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="row">
      {isLoading || characters.length === 0 ? (
        <div className="d-flex flex-column justify-content-center align-items-center mt-5">
          <MoonLoader color="#00BFFF" size={60} /> {/* Spinner MoonLoader */}
          <p className="mt-3 text-info">Cargando...</p> {/* Texto Cargando */}
        </div>
      ) : (
        characters.map((item) => (
          <CharacterCard key={item.id} item={item} onClick={onClick} />
        ))
      )}
    </div>
  );
};

export default CharacterContainer;
