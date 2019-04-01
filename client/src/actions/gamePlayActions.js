import { SET_PLAYER } from "./types";

// import { CLICK_GAME_SQUARE } from "./types";

export const consLogClick = token => {
  console.log("oy you clicked on ", token, ", mate");
  return {
    type: "CLICKED_GAME_SQUARE",
    payload: token
  };
};

// Okay so let's create a function that returns the desired type and data.... I guess
export const setPlayer = formData => {
  return {
    type: SET_PLAYER,
    payload: formData
  };
};

// And this is the function which will be imported by the SetPlayer component. This one will do the actual work of changing the state... I think.
export const choosePlayer = formData => dispatch => {
  dispatch(setPlayer(formData));
};
