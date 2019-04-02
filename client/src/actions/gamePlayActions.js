import { SET_PLAYER } from "./types";

// import { CLICK_GAME_SQUARE } from "./types";

export const consLogClick = token => {
  console.log("oy you clicked on ", token, ", mate");
  return {
    type: "CLICKED_GAME_SQUARE",
    payload: token
  };
};

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
