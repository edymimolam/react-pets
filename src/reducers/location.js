const SET_LOCATION = "SET_LOCATION";

export const setLocation = location => ({
  type: SET_LOCATION,
  payload: location
});

const locationReducer = (state = "Seattle, WA", action) => {
  switch (action.type) {
    case SET_LOCATION:
      return action.payload;
    default:
      return state;
  }
};

export default locationReducer;
