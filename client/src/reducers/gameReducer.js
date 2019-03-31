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
  // add action
  switch (action.type) {
    case SET_PLAYER:
      /**
       * action.payload will have the avatar in it (passed in using the `submitSetPlayer`
       * action creator).
       * */
      console.log("player avatar", action.payload);

      /**
       * because this is a reducer, we need to return the current state and with
       * our newly selected avatar added to it
       */
      return { ...state, player: action.payload };
      break;

    default:
      break;
  }

  return { ...state };
}
