import { combineReducers } from "redux";

const rootReducer = (state = {}) => {
  return { ...state };
};

const reducers = combineReducers({
  test: rootReducer
});

export default reducers;
