import {
  SET_PLAYER,
  CLICK_GAME_SQUARE,
  // SET_WINNER,
  TALLY_CKN_SCORE,
  TALLY_KTN_SCORE,
  UPDATE_WINNER,
  CATS_GAME,
  RESET_BOARD
} from "./types";

// import { CLICK_GAME_SQUARE } from "./types";

// export const consLogClick = token => {
//   console.log("oy you clicked on ", token, ", mate");
//   return {
//     type: "CLICKED_GAME_SQUARE",
//     payload: token
//   };
// };

// "setPlayer()" returns data for use by "choosePlayer()"
export const setPlayer = formData => {
  return {
    type: SET_PLAYER,
    payload: formData
  };
};
// "choosePlayer()" calls "setPlayer()" in order to change state.player to the selected 'team', which will enable the game to start
export const choosePlayer = formData => dispatch => {
  dispatch(setPlayer(formData));
};

// "boardInfo()" returns the data for use by "updateBoard()"
export const boardInfo = newBoard => {
  return {
    type: CLICK_GAME_SQUARE,
    payload: newBoard
  };
};
// "updateBoard()" changes the value of the selected state.board[index] to equal state.player
export const updateBoard = newBoard => dispatch => {
  dispatch(boardInfo(newBoard));
};

// "winnerInfo()" returns the data for use by "updateWinner()"
export const winnerInfo = winner => {
  return {
    type: UPDATE_WINNER,
    payload: winner
  };
};
// "updateWinner()" changes the value of state.winner. Is called when a player gets three in a row
export const updateWinner = winner => dispatch => {
  dispatch(winnerInfo(winner));
};

export const cknScoreInfo = tally => {
  return {
    type: TALLY_CKN_SCORE,
    payload: tally
  };
};

export const updateCknScore = tally => dispatch => {
  dispatch(cknScoreInfo(tally));
};

export const ktnScoreInfo = tally => {
  return {
    type: TALLY_KTN_SCORE,
    payload: tally
  };
};

export const updateKtnScore = tally => dispatch => {
  dispatch(ktnScoreInfo(tally));
};

export const catsGameInfo = draw => {
  return {
    type: CATS_GAME,
    payload: draw
  };
};

export const updateCatsGame = draw => dispatch => {
  dispatch(catsGameInfo(draw));
};

export const boardResetInfo = reset => {
  return {
    type: RESET_BOARD,
    payload: reset
  };
};

export const updateBoardReset = reset => dispatch => {
  dispatch(boardResetInfo(reset));
};
