import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { updateBoardReset } from "../../actions/gamePlayActions";
class ScoreBoard extends Component {
  resetGame() {
    this.props.updateBoardReset();
  }

  render() {
    return (
      <React.Fragment>
        <section className="scoreBoardContainer">
          <header />
          <main>
            <div className="scoreBoard">
              <div className="cknScore">
                <span role="img" aria-label="chicken">
                  🐔
                </span>
                <span className="score">{this.props.gameState.cknScore}</span>
              </div>
              <div className="ktnScore">
                <span role="img" aria-label="kitten">
                  😺
                </span>
                <span className="score">{this.props.gameState.ktnScore}</span>
              </div>
            </div>
            <button
              disabled={
                !this.props.gameState.winner && !this.props.gameState.catsGame
              }
              onClick={() => this.resetGame()}
            >
              PLAY AGAIN AGAIN
            </button>
          </main>
        </section>
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
