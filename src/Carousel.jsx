import React, { useState } from "react";

const Carousel = ({ media }) => {
  const [index, setIndex] = useState(0);
  if (!media.length)
    media = [
      {
        small: "http://placecorgi.com/600/600",
        large: "http://placecorgi.com/600/600"
      }
    ];
  return (
    <div className="carousel">
      <img src={media[index].large} alt="animal" />
      <div className="carousel-smaller">
        {media.map((img, i) => (
          // eslint-disable-next-line
          <img
            src={img.small}
            key={i}
            alt="animal thumbnail"
            onClick={() => setIndex(i)}
            className={i === index ? "active" : ""}
          />
        ))}
      </div>
    </div>
  );
};

export default Carousel;
