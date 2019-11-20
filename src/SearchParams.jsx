import React, { useState } from "react";
import useDropdown from "./useDropdown.jsx";
import { ANIMALS } from "@frontendmasters/pet";

const SearchParams = () => {
  const breeds = [
    "Field Spaniel",
    "Finnish Lapphund",
    "Finnish Spitz",
    "German Pinscher"
  ];
  const [location, setLocation] = useState("Seattle, WA");
  const [animal, AnimalsDropdown] = useDropdown("Animals", "cat", ANIMALS);
  const [breed, BreedsDropdown] = useDropdown("Breeds", "", breeds);

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
      </form>
    </div>
  );
};

export default SearchParams;
