import { combineReducers } from "redux";
import { actionTypes } from "./actionPages";

const animate = (state = false, { type, payload }) => {
  switch (type) {
    case actionTypes.LOGO_ANIMETE:
      return state ? state : !state;
    default:
      return state;
  }
};

const HomePageReducer = combineReducers({
  animate
});

export default HomePageReducer;
