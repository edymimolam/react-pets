import React, { Component } from "react";
import pet from "@frontendmasters/pet";
import { navigate } from "@reach/router";
import ThemeContext from "./ThemeContext.jsx";
import Carousel from "./Carousel.jsx";
import Modal from "./Modal";

class Details extends Component {
  state = { loading: true, isModalShow: false };

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
        media: animal.photos,
        url: animal.url
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
      media,
      url
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
              <button
                style={{ backgroundColor: value }}
                onClick={() => this.setState({ isModalShow: true })}
              >
                Adopt {name}
              </button>
            )}
          </ThemeContext.Consumer>
        </div>
        <Carousel media={media} />
        {this.state.isModalShow && (
          <Modal>
            <div>
              <h1>Would you like to adopt {name}</h1>
              <div className="buttons">
                <button onClick={() => navigate(url)}>yes</button>
                <button onClick={() => this.setState({ isModalShow: false })}>
                  no
                </button>
              </div>
            </div>
          </Modal>
        )}
      </div>
    );
  }
}

export default Details;
