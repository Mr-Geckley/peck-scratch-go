import React, { Component } from "react";
import { connect } from "react-redux";

class TurnIndicator extends Component {
  translatePlayer() {
    let currentPlayer = "";
    if (this.props.gameState.player === "🐔") {
      currentPlayer = "chickens";
      return currentPlayer;
    }

    if (this.props.gameState.player === "🐱") {
      currentPlayer = "kittens";
      return currentPlayer;
    }
  }

  renderHTML() {
    return (this.props.gameState.player === null &&
      this.props.gameState.winner === null) ||
      this.props.gameState.winner != null ? null : (
      <h2>{this.translatePlayer()}, it's y'alls turn</h2>
    );
  }

  render() {
    return this.renderHTML();
  }
}

function mapStateToProps(state) {
  return {
    gameState: state.game
  };
}

export default connect(mapStateToProps)(TurnIndicator);
