import { createStore, combineReducers } from "redux";
import reducer__SearchBar from "../components/SearchBar/SearchBar.reducer";

const store = createStore(
  combineReducers({
    searchBar: reducer__SearchBar,
  })
);

export default store;