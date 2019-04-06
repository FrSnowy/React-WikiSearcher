import constants from "./SearchBar.constants";

const initialState = {
  searchString: '',
  activity: 'reading',
};

function reducer__SearchBar(state = initialState, action) {
  const { type, value } = action;

  switch (type) {
    case constants.UPDATE_SEARCH_STRING:
      return { ...state, searchString: value }
    case constants.CHANGE_ACTIVITY:
      return { ...state, activity: value }
    default: return state;
  }
}

export default reducer__SearchBar;