import React, { Component } from "react";
import { choosePlayer } from "../../actions/gamePlayActions";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

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
      <div className="container">
        <form onSubmit={e => this.handleForm(e)} className="form-inline ">
          <div className="choose-slash-score">
            <div className="player-div">
              <label className="player form-control ">
                <span>{playerA}</span>
                <input
                  type="radio"
                  name="player"
                  value="🐔"
                  onInput={e => this.handleChange(e)}
                />
              </label>
            </div>

            <div className="player-div">
              <label className="player form-control ">
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
            </div>
          </div>
          <button
            input
            id="startButton"
            type="submit"
            value="START"
            disabled={true}
            className="ml-auto action-button"
            style={{ display: "block" }}
          >
            START
          </button>
        </form>
      </div>
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
