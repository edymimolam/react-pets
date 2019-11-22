import React, { useState, useEffect } from "react";
import useDropdown from "./useDropdown.jsx";
import pet, { ANIMALS } from "@frontendmasters/pet";

const SearchParams = () => {
  // const breeds = [
  //   "Field Spaniel",
  //   "Finnish Lapphund",
  //   "Finnish Spitz",
  //   "German Pinscher"
  // ];
  const [location, setLocation] = useState("Seattle, WA");
  const [breeds, setBreeds] = useState([]);
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

  return (
    <div className="search-params">
      <form>
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
    </div>
  );
};

export default SearchParams;
