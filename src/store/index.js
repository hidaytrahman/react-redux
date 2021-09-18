import { createStore } from "redux";
import { peopleReducer } from "../reducers";

// store
const store = createStore(peopleReducer);

export default store;