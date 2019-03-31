import { CHOOSE_PLAYER, SET_PLAYER } from "./types";

// import { CLICK_GAME_SQUARE } from "./types";

export const consLogClick = token => {
  console.log("oy you clicked on ", token, ", mate");
  return {
    type: "CLICKED_GAME_SQUARE",
    payload: token
  };
};

export const changeContent = token => {
  console.log(token);
  return {
    type: "CLICKED_GAME_SQUARE",
    payload: token
  };
};

/**
 * this action creator creates an object that has a type (SET_PLAYER)
 * and a payload, which is whatever you want - in this case, the player Avatar 🐱 or 🐔
 */
export const submitSetPlayer = playerAvatar => {
  // mw - this below info should be passed in as playerAvatar, not grabbed from the dom
  // let form = document.getElementById("setPlayer");
  // console.log(form.input.val());

  return {
    type: SET_PLAYER,
    payload: playerAvatar
  };
};
