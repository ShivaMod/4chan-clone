import { combineReducers } from "redux";

import { boards } from "./boardsReducer";
import { threads } from "./threadsReducer";

export default combineReducers({
  boards,
  threads
});
