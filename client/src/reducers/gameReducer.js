import {
  SET_PLAYER,
  CLICK_GAME_SQUARE,
  SET_WINNER,
  TALLY_CKN_SCORE,
  TALLY_KTN_SCORE,
  UPDATE_WINNER,
  CATS_GAME,
  RESET_BOARD,
  REQ_WIN_GIF,
  SET_HOLIDAY_THEME
} from "../actions/types";

export const xmasArray = ["🎅", "👼", "⛄", "🎁", "🎄"];

export const weenArray = ["🎃", "😈", "👽", "👻", "💀"];

export const cknArray = ["🐔", "🐓", "🐣", "🐤", "🐥"];

export const ktnArray = ["😺", "🐈", "🐆", "😻", "😾"];

const initialState = {
  board: Array(9).fill(""),
  player: null,
  winner: null,
  catsGame: false,
  cknArray: ["🐔", "🐓", "🐣", "🐤", "🐥"],
  ktnArray: ["😺", "🐈", "🐆", "😻", "😾"],
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
      theWinner = "😺";
    }

    if (theLooser === "😺") {
      theWinner = "🐔";
    }

    return {
      ...state,
      winner: theWinner
    };
  }

  if (action.type === CATS_GAME) {
    return {
      ...state,
      catsGame: true
    };
  }

  if (action.type === RESET_BOARD) {
    return {
      ...state,
      player: null,
      winner: null,
      board: Array(9).fill(""),
      catsGame: false,
      pic: null,
      isLoaded: false
    };
  }

  if (action.type === REQ_WIN_GIF) {
    return {
      ...state,
      pic: action.payload
    };
  }

  if (action.type === SET_HOLIDAY_THEME && state.cknArray !== xmasArray) {
    // console.log("cknArray active.");
    return {
      ...state,
      cknArray: xmasArray,
      ktnArray: weenArray
    };
  }

  if (action.type === SET_HOLIDAY_THEME && state.cknArray === xmasArray) {
    // console.log("xmasArray");
    return {
      ...state,
      cknArray: cknArray,
      ktnArray: ktnArray
    };
  }

  // COMING UP: game square clicking action, jackson
  return { ...state };
}
