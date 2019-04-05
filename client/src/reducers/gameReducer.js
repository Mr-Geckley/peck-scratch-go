import {
  SET_PLAYER,
  CLICK_GAME_SQUARE,
  SET_WINNER,
  TALLY_CKN_SCORE,
  TALLY_KTN_SCORE,
  UPDATE_WINNER
} from "../actions/types";

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

  if (action.type === CLICK_GAME_SQUARE) {
    return {
      ...state,
      board: action.payload
    };
  }

  if (action.type === SET_WINNER) {
    return {
      ...state,
      winner: action.payload
    };
  }

  if (action.type === TALLY_CKN_SCORE) {
    let chickenScore = state.cknScore;
    return {
      ...state,
      cknScore: (chickenScore += 1)
    };
  }

  if (action.type === TALLY_KTN_SCORE) {
    let kittentScore = state.ktnScore;
    return {
      ...state,
      ktnScore: (kittentScore += 1)
    };
  }

  if (action.type === UPDATE_WINNER) {
    let theLooser = state.player;
    let theWinner = null;

    if (theLooser === "🐔") {
      theWinner = "🐱";
    }

    if (theLooser === "🐱") {
      theWinner = "🐔";
    }

    return {
      ...state,
      winner: theWinner
    };
  }
  // COMING UP: game square clicking action, jackson
  return { ...state };
}
