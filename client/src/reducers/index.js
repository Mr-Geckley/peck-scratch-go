import { combineReducers } from "redux";
import userReducer from "./userReducer";
import errorReducer from "./errorReducer";
import gameReducer from "./gameReducer";

const rootReducer = combineReducers({
  user: userReducer,
  errors: errorReducer,
  game: gameReducer
});

export default rootReducer;
