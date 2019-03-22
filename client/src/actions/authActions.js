import axios from "axios";
// register user
import { GET_ERRORS } from "./types";
export const registerUser = (userData, history) => dispatch => {
  axios
    .post("/api/auth/register", userData)
    .then(res => history.push("/login"))
    .catch(err =>
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      })
    );
};
