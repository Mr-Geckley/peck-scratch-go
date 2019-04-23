import React, { Component } from "react";
import { connect } from "react-redux";

class TurnIndicator extends Component {
  translatePlayer() {
    let currentPlayer = "";

    if (this.props.gameState.cknArray.includes("🐔")) {
      if (this.props.gameState.player === "🐔") {
        currentPlayer = "Chickens";
      } else if (this.props.gameState.player === "😺") {
        currentPlayer = "Kittens";
      }
      return currentPlayer;
    } else if (this.props.gameState.cknArray.includes("🎅")) {
      if (this.props.gameState.player === "🐔") {
        currentPlayer = "Team Christmas";
      } else if (this.props.gameState.player === "😺") {
        currentPlayer = "Team Halloween";
      }
      return currentPlayer;
    }

    // if (this.props.gameState.player === "🐔") {
    //   currentPlayer = "chickens";
    // } else if (this.props.gameState.player === "😺") {
    //   currentPlayer = "kittens";
    // }
    // return currentPlayer;
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
