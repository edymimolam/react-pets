import React, { useState, useEffect, useContext } from "react";
import ThemeContext from "./ThemeContext.jsx";
import useDropdown from "./useDropdown.jsx";
import pet, { ANIMALS } from "@frontendmasters/pet";
import SearchResults from "./SearchResults.jsx";

const SearchParams = () => {
  const [location, setLocation] = useState("Seattle, WA");
  const [breeds, setBreeds] = useState([]);
  const [pets, setPets] = useState([]);
  const [animal, AnimalsDropdown] = useDropdown("Animals", "dog", ANIMALS);
  const [breed, BreedsDropdown, setBreed] = useDropdown("Breeds", "", breeds);
  const [theme, setTheme] = useContext(ThemeContext);

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

        <label htmlFor="theme">
          Theme
          <select
            id="theme"
            onChange={e => setTheme(e.target.value)}
            onBlur={e => setTheme(e.target.value)}
          >
            <option value="#333">333</option>
            <option value="#444">444</option>
            <option value="#555">555</option>
            <option value="#666">666</option>
            <option value="#777">777</option>
            <option value="#888">888</option>
          </select>
        </label>

        <button style={{ backgroundColor: theme }}>Submit</button>
      </form>
      <SearchResults pets={pets} />
    </div>
  );
};

export default SearchParams;
