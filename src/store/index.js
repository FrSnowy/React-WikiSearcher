import { createStore, combineReducers, applyMiddleware } from "redux";
import reducer__SearchBar from "../components/SearchBar/SearchBar.reducer";
import thunk from "redux-thunk";

const store = createStore(
  combineReducers({ searchBar: reducer__SearchBar }),
  applyMiddleware(thunk),
);

export default store;