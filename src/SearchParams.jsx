import React, { useState, useEffect } from "react";
import useDropdown from "./useDropdown.jsx";
import pet, { ANIMALS } from "@frontendmasters/pet";
import SearchResults from "./SearchResults.jsx";

const SearchParams = () => {
  const [location, setLocation] = useState("Seattle, WA");
  const [breeds, setBreeds] = useState([]);
  const [pets, setPets] = useState([]);
  const [animal, AnimalsDropdown] = useDropdown("Animals", "dog", ANIMALS);
  const [breed, BreedsDropdown, setBreed] = useDropdown("Breeds", "", breeds);

  useEffect(() => {
    setBreed("");
    setBreeds([]);
    pet
      .breeds(animal)
      .then(
        ({ breeds: b }) => setBreeds(b.map(({ name }) => name)),
        console.error
      );
  }, [animal, setBreed]);

  const requestPets = async () => {
    let { animals } = await pet.animals({
      location,
      breed,
      type: animal
    });
    setPets(animals || []);
  };

  return (
    <div className="search-params">
      <form
        onSubmit={e => {
          e.preventDefault();
          requestPets();
        }}
      >
        <label htmlFor="location">
          Location
          <input
            value={location}
            onChange={e => setLocation(e.target.value)}
            id="location"
            placeholder="location"
          />
        </label>
        <AnimalsDropdown />
        <BreedsDropdown />
        <button>Submit</button>
      </form>
      <SearchResults pets={pets} />
    </div>
  );
};

export default SearchParams;
