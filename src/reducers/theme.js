const SET_THEME = "SET_THEME";

export const setTheme = theme => ({ type: SET_THEME, payload: theme });

const themeReducer = (state = "#333", action) => {
  switch (action.type) {
    case SET_THEME:
      return action.payload;
    default:
      return state;
  }
};

export default themeReducer;
