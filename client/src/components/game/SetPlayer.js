import React, { Component } from "react";
import { choosePlayer } from "../../actions/gamePlayActions";
import { connect } from "react-redux";
import { bindActionCreators } from "../../../../../../AppData/Local/Microsoft/TypeScript/3.3/node_modules/redux";

class SetPlayer extends Component {
  handleForm(e) {
    e.preventDefault();
    this.props.choosePlayer(e.target.player.value);
    // console.log(JSON.stringify(this.props.gameState));
  }
  handleChange(e) {
    e.preventDefault();
    document.getElementById("startButton").disabled = false;
  }

  render() {
    let playerA = this.props.gameState.cknArray[0];
    let playerB = this.props.gameState.ktnArray[0];
    return (
      <form onSubmit={e => this.handleForm(e)}>
        <label>
          <span>{playerA}</span>
          <input
            type="radio"
            name="player"
            value="🐔"
            onInput={e => this.handleChange(e)}
          />
        </label>
        <label>
          <span role="img" aria-label="kitten">
            {playerB}
          </span>
          <input
            type="radio"
            name="player"
            value="😺"
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
    gameState: state.game
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ choosePlayer: choosePlayer }, dispatch);
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SetPlayer);
