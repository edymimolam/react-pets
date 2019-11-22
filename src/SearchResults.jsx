import React from "react";
import Pet from "./Pet.jsx";
const SearchResults = ({ pets }) => {
  return (
    <div className="search">
      {pets.length ? (
        pets.map(p => (
          <Pet
            key={p.id}
            name={p.name}
            animal={p.species}
            breed={p.breeds.primary}
            media={p.photos}
            location={`${p.contact.address.city}, ${p.contact.address.state}`}
            id={p.id}
          />
        ))
      ) : (
        <h1>No pets</h1>
      )}
    </div>
  );
};

export default SearchResults;
