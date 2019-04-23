import React, { Component } from "react";
import { connect } from "react-redux";
import TurnIndicator from "./TurnIndicator";

class Header extends Component {
  renderWinnerText() {
    let theWinner = "";
    if (this.props.gameState.cknArray.includes("🐔")) {
      if (this.props.gameState.winner === "🐔") {
        theWinner = "TEAM CHICKENS";
      } else if (this.props.gameState.winner === "😺") {
        theWinner = "TEAM KITTENS";
      }
    } else if (this.props.gameState.cknArray.includes("🎅")) {
      if (this.props.gameState.winner === "🐔") {
        theWinner = "TEAM CHRISTMAS";
      } else if (this.props.gameState.winner === "😺") {
        theWinner = "TEAM HALLOWEEN";
      }
    }

    return <h1>{theWinner} WINS</h1>;
  }

  renderHtml() {
    if (this.props.gameState.winner === null) {
      return <h1>PECK-SCRATCH-GO</h1>;
    } else {
      return this.renderWinnerText();
    }
  }

  render() {
    return (
      <div>
        <header>{this.renderHtml()}</header>
        <TurnIndicator />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    gameState: state.game
  };
}

export default connect(mapStateToProps)(Header);
