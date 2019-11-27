const locationReducer = (state = "Seattle, WA", action) => {
  switch (action.type) {
    case "CHANGE_LOCATION":
      return action.payload;
    default:
      return state;
  }
};

export default locationReducer;
