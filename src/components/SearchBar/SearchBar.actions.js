import request from 'request-promise';
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
  getInfo: (bySelector) => dispatch => {
    dispatch({
      type: constants.CHANGE_ACTIVITY,
      value: 'searching'
    });

    const parameters = {
      uri: 'https://cors-anywhere.herokuapp.com/https://ru.wikipedia.org/w/api.php', //using proxy to access cors wiki
      qs: {
        action: 'query',
        list: 'search',
        formatversion: 2,
        srsearch: bySelector,
        format: 'json',
      },
    };

    request(parameters)
      .then((articles) => {
        dispatch({
          type: constants.LOAD_DATA,
          value: JSON.parse(articles).query,
        });

        dispatch({
          type: constants.SAVE_SEARCH_STRING,
          value: bySelector,
        });
        
        dispatch({
          type: constants.CHANGE_ACTIVITY,
          value: 'reading'
        });
      })
      .catch(err => console.warn('API CALL DIED'));
  },
  saveSearchString: (searchString) => ({
    type: constants.SAVE_SEARCH_STRING,
    value: searchString
  })
};

export default actions;