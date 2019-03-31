import React, { Component } from "react";

import { connect } from "react-redux";
import { submitSetPlayer } from "../../actions/gamePlayActions";

class SetPlayer extends Component {
  state = { selectedAvatar: null };

  handleForm(e) {
    e.preventDefault();
    /**
     * Use the function added to props via `mapDispatchToProps` to pass the player's
     * selected avatar when we submit the form.
     */
    this.props.submitPlayerOne(this.state.selectedAvatar);
  }
  handleChange(e) {
    // e.preventDefault();
    // document.getElementById("startButton").disabled = false;

    const selectedAvatar = e.target.value;
    console.log("selectedAvatar", selectedAvatar);

    this.setState({ selectedAvatar });
  }

  render() {
    /**
     * Game State with player will be populated after we submit the form
     * and it flows through the reducer
     * try switching the player back and forth and pressing start
     * the 'local state' in this.state.selectedAvatar will always be updated immediately
     * the 'reducer state' visible because of `mapStateToProps` will only be updated
     * after you press start and it gets sent to the reducer
     */
    console.log("GAME STATE", this.props.gameState);
    console.log("GAME STATE AVATAR", this.props.gameState.player);

    return (
      <form onSubmit={e => this.handleForm(e)}>
        <label>
          <span role="img" aria-label="chicken">
            🐔
          </span>
          <input
            type="radio"
            name="player"
            value="🐔"
            onInput={e => this.handleChange(e)}
          />
        </label>
        <label>
          <span role="img" aria-label="kitten">
            😺
          </span>
          <input
            type="radio"
            name="player"
            value="🐱"
            onInput={e => this.handleChange(e)}
          />
        </label>
        <input
          id="startButton"
          type="submit"
          value="START"
          // disable the button if avatar hasn't been selected yet
          disabled={this.state.selectedAvatar === null}
        />
      </form>
    );
  }
}

function mapStateToProps(state) {
  console.log("STATE", state);
  return {
    gameState: state.game,
    user: state.user
  };
}

function mapDispatchToProps(dispatch) {
  return {
    submitPlayerOne: avatar => {
      // we're using the submitSetPlayerAction
      dispatch(submitSetPlayer(avatar));
    }
  };
}

// mapDispatchToProps needs to be passed second argument
// see https://redux.js.org/basics/usage-with-react
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SetPlayer);
