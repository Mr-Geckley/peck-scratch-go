import { CHOOSE_PLAYER } from "./types";

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

// export const submitSetPlayer = data => {
//   let form = document.getElementById("setPlayer");
//   console.log(form.input.val());
//   return {
//     type: "SET_PLAYER",
//     payload: data
//   };
// };
