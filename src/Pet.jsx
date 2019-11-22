import React from "react";
import { Link } from "@reach/router";

const Pet = props => {
  const { name, animal, breed, media, location, id } = props;
  let imageSrc = "http://placecorgi.com/300/300";
  if (media.length) imageSrc = media[0].medium;
  return (
    <Link to={`/details/${id}`} className="pet">
      <div className="image-container">
        <img src={imageSrc} alt={name} />
      </div>

      <div className="info">
        <h1>{name}</h1>
        <h2>{`${animal} - ${breed} - ${location}`}</h2>
      </div>
    </Link>
  );
};
export default Pet;
