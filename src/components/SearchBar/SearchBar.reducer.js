import constants from "./SearchBar.constants";

const initialState = {
  searchString: '',
  cachedString: '',
  activity: 'reading',
  results: null,
};

function reducer__SearchBar(state = initialState, action) {
  const { type, value } = action;

  switch (type) {
    case constants.UPDATE_SEARCH_STRING:
      return { ...state, searchString: value }
    case constants.CHANGE_ACTIVITY:
      return { ...state, activity: value }
    case constants.LOAD_DATA:
      return { ...state, results: value }
    case constants.SAVE_SEARCH_STRING:
      return { ...state, cachedString: value }
    default: return state;
  }
}

export default reducer__SearchBar;