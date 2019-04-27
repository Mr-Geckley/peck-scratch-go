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
  }

  renderHTML() {
    // refer to 'state' as 'stayt' to indicate that it's just an abbreviation.
    // I don't like homonyms in the context of code
    let stayt = this.props.gameState;

    if (
      (stayt.player === null && stayt.winner === null) ||
      (stayt.winner !== null || stayt.catsGame === true)
    ) {
      return null;
    } else {
      return (
        <h4 className="text-center">
          {this.translatePlayer()}, it's y'alls turn
        </h4>
      );
    }

    // =-=-=-=-=-=-=-=-=-= the block of code below function just like the code above,
    // =-=-=-=-=-=-=-=-=-= however it exclude the case of a cats game
    // return (this.props.gameState.player === null &&
    //   this.props.gameState.winner === null) ||
    //   this.props.gameState.winner != null ? null : (
    //   <h4 className="text-center">
    //     {this.translatePlayer()}, it's y'alls turn
    //   </h4>
    // );
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
