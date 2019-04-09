import constants from "./App.constants";

const initialState = {
  theme: 'light',
};

function reducer__App(state = initialState, action) {
  const { type, value } = action;

  switch (type) {
    case constants.CHANGE_THEME:
      return { ...state, theme: value }
    default: return state;
  }
}

export default reducer__App;