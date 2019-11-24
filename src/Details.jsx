import React, { Component } from "react";
import pet from "@frontendmasters/pet";
import Carousel from "./Carousel.jsx";
import ThemeContext from "./ThemeContext.jsx";

class Details extends Component {
  state = { loading: true };

  componentDidMount() {
    const requestAnimal = async () => {
      const { animal } = await pet.animal(+this.props.id);
      this.setState({
        loading: false,
        name: animal.name,
        animal: animal.type,
        breed: animal.breeds.primary,
        location: `${animal.contact.address.city}, ${animal.contact.address.state}`,
        description: animal.description,
        media: animal.photos
      });
    };
    requestAnimal();
  }

  render() {
    const {
      loading,
      name,
      animal,
      breed,
      location,
      description,
      media
    } = this.state;
    if (loading) return <h1>Loading...</h1>;

    return (
      <div className="details">
        <div>
          <h1>{name}</h1>
          <h2>
            {animal} - {breed} - {location}
          </h2>
          <p>{description}</p>
          <ThemeContext.Consumer>
            {([value]) => (
              <button style={{ backgroundColor: value }}>Adopt {name}</button>
            )}
          </ThemeContext.Consumer>
        </div>
        <Carousel media={media} />
      </div>
    );
  }
}

export default Details;
