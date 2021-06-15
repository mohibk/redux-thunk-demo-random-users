import { createStore, applyMiddleware } from "redux";
import usersReducers from "../reducers/usersReducer";
import thunk from "redux-thunk";

const store = createStore(usersReducers, applyMiddleware(thunk));

store.subscribe(() => {
  console.log("store data: ", store.getState());
});

export default store;
