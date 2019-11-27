import React, { useState, useEffect } from "react";
import useDropdown from "./useDropdown.jsx";
import pet, { ANIMALS } from "@frontendmasters/pet";
import SearchResults from "./SearchResults.jsx";
import { connect } from "react-redux";
import { changeLocation } from "./actionCreators/changeLocation";
import { changeTheme } from "./actionCreators/changeTheme";
import { requestPets } from "./actionCreators/requestPets";

const SearchParams = props => {
  const [breeds, setBreeds] = useState([]);
  // const [pets, setPets] = useState([]);
  const [animal, AnimalsDropdown] = useDropdown("Animals", "dog", ANIMALS);
  const [breed, BreedsDropdown, setBreed] = useDropdown("Breeds", "", breeds);

  const {
    location,
    changeLocation,
    theme,
    changeTheme,
    requestPets,
    pets
  } = props;

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
      <form
        onSubmit={e => {
          e.preventDefault();
          requestPets(location, breed, animal);
        }}
      >
        <label htmlFor="location">
          Location
          <input
            value={location}
            onChange={e => changeLocation(e.target.value)}
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
            onChange={e => changeTheme(e.target.value)}
            onBlur={e => changeTheme(e.target.value)}
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

const mapStateToProps = ({ loc: location, theme, pets }) => ({
  location,
  theme,
  pets
});
const mapDispatchToProps = dispatch => ({
  changeLocation: location => dispatch(changeLocation(location)),
  changeTheme: theme => dispatch(changeTheme(theme)),
  requestPets: (location, breed, type) =>
    dispatch(requestPets(location, breed, type))
});

export default connect(mapStateToProps, mapDispatchToProps)(SearchParams);
