import React from "react";
import PropTypes from "prop-types";

const Pet = ({ name, animal, breed }) => (
  <div>
    <h1>{name}</h1>
    <h2>{animal}</h2>
    <h2>{breed}</h2>
  </div>
);

Pet.propTypes = {
  name: PropTypes.string.isRequired,
  animal: PropTypes.string.isRequired,
  breed: PropTypes.string.isRequired
};

export default Pet;
