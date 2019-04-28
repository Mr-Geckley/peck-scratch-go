import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { updateBoardReset } from "../../actions/gamePlayActions";
class ScoreBoard extends Component {
  resetGame() {
    this.props.updateBoardReset();
  }

  render() {
    let playerA = this.props.gameState.cknArray[0];
    let playerB = this.props.gameState.ktnArray[0];
    return (
      <React.Fragment>
        <div className="container">
          <div className="scoreboardDiv form-inline">
            <div className="choose-slash-score">
              <div className="player-div">
                <label className="player form-control score-div">
                  {playerA}
                  <span className="score">{this.props.gameState.cknScore}</span>
                </label>
              </div>

              <div className="player-div ">
                <label className="player form-control score-div">
                  {playerB}
                  <span className="score">{this.props.gameState.ktnScore}</span>
                </label>
              </div>
            </div>

            <button
              className="action-button play-again ml-auto"
              disabled={
                !this.props.gameState.winner && !this.props.gameState.catsGame
              }
              onClick={() => this.resetGame()}
            >
              PLAY AGAIN
            </button>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

function mapStateToProps(state) {
  return {
    gameState: state.game
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ updateBoardReset: updateBoardReset }, dispatch);
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ScoreBoard);
