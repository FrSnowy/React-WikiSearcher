import constants from "./SearchBar.constants";

const actions = {
  updateSearchValue: (e) => ({
    type: constants.UPDATE_SEARCH_STRING,
    value: e.target.value,
  }),
  changeActivity: (value) => ({
    type: constants.CHANGE_ACTIVITY,
    value,
  }),
};

export default actions;