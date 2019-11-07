import { combineReducers } from "redux";
// import { persistReducer } from "redux-persist";
// import storage from "redux-persist/lib/storage";

import homeReducer from "./modules/pages/homeReducer";

const rootReduser = combineReducers({
  home: homeReducer
});

export default rootReduser;
