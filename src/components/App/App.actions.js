import constants from "./App.constants";

const actions = {
  changeTheme: (prevTheme) => {
    console.log(prevTheme);
    return ({
      type: constants.CHANGE_THEME,
      value: prevTheme === 'light' ? 'dark' : 'light',
    })
  },
};

export default actions;