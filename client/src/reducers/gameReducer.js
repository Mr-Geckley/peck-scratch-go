import { SET_PLAYER } from "../actions/types";

const initialState = {
  board: Array(9).fill(""),
  player: null,
  winner: null,
  catsGame: false,
  cknArray: ["🐔", "🐓", "🐣", "🐤", "🐥"],
  ktnArray: ["🐆", "🐈", "😺", "😻", "😾"],
  cknScore: 0,
  ktnScore: 0,
  pic: null,
  isLoaded: false
};

export default function(state = initialState, action) {
  // SET_PLAYER refers to the user selecting a 'team' and pressing the start button. Therefore, changing player.state to the user's selection
  if (action.type === SET_PLAYER) {
    return {
      ...state,
      player: action.payload
    };
  }

  // COMING UP: game square clicking action, jackson
  return { ...state };
}
