import { combineReducers } from "redux";

const LIBRARY_INITIAL_STATE = {
  Fiction: [],
  "Non-Fiction": [],
  Magazines: [],
};

function library(state = LIBRARY_INITIAL_STATE, action) {
  switch (action.type) {
    default:
      return state;
  }
}

const reducers = combineReducers({
  library,
});

export default reducers;
