// Libraries
import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
// Utils
import { getLocalStorage, setLocalStorage } from "../utils/localStorage";
// Reducers
import rootReducer from "./reducers";

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);

store.subscribe(() => {
  setLocalStorage("store", store.getState().favoriteReducer);
});

export default store;
