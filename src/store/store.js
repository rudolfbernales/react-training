import { createStore, combineReducers } from "redux";
import contact from "../reducers/reducer";

const reducers = combineReducers({
  contact
});

export default createStore(
  reducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
