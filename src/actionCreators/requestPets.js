import pet from "@frontendmasters/pet";

export const requestPets = (location, breed, type) => async dispatch => {
  let { animals } = await pet.animals({ location, breed, type });
  dispatch({ type: "SET_PETS", payload: animals });
  console.log(location, breed, type);
};

//let { animals } = await pet.animals({
//     location,
//     breed,
//     type: animal
//   });
//   setPets(animals || []);
