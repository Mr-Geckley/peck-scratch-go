import { combineReducers } from "redux";
import userReducer from "./userReducer";
import errorReducer from "./errorReducer";
import gameReducer from "./gameReducer";

export default combineReducers({
  user: userReducer,
  errors: errorReducer,
  game: gameReducer
});
