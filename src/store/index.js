import { createStore, combineReducers, applyMiddleware } from "redux";
import reducer__SearchBar from "../components/SearchBar/SearchBar.reducer";
import reducer__App from "../components/App/App.reducer";
import thunk from "redux-thunk";

const store = createStore(
  combineReducers({ searchBar: reducer__SearchBar, app: reducer__App }),
  applyMiddleware(thunk),
);

export default store;