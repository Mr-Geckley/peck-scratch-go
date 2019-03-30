import React, { Component } from "react";

import { connect } from "react-redux";

class SetPlayer extends Component {
  handleForm(e) {
    e.preventDefault();
  }
  handleChange(e) {
    e.preventDefault();
    document.getElementById("startButton").disabled = false;
  }

  render() {
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
        <input id="startButton" type="submit" value="START" disabled={true} />
      </form>
    );
  }
}

function mapStateToProps(state) {
  return {
    gameState: state.game,
    user: state.user
  };
}

function mapDispatchToProps(dispatch) {
  return {
    submitPlayerOne: () => {}
  };
}

export default connect(mapStateToProps)(SetPlayer);
