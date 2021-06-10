import { combineReducers } from "redux";

const LIBRARY_INITIAL_STATE = {
  Fiction: [],
  "Non-Fiction": [],
  Magazines: [],
};

function library(state = LIBRARY_INITIAL_STATE, action) {
  switch (action.type) {
    case "ADD_SECTION": {
      const { sectionName, book } = action.payload;
      const oldSection = state[sectionName];
      return { ...state, [sectionName]: [...oldSection, book] };
    }
    default:
      return state;
  }
}

const reducers = combineReducers({
  library,
});

export default reducers;
