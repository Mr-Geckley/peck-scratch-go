import React, { Component } from "react";
import { connect } from "react-redux";
import TurnIndicator from "./TurnIndicator";

class Header extends Component {
  renderWinnerText() {
    let theWinner = "";
    let evalCatsGame = "";
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

    if (this.props.gameState.catsGame === false) {
      evalCatsGame = "false";
    }

    return (
      <div style={{ paddingTop: "1.75rem" }}>
        <h1 className="text-center">{theWinner} WINS</h1>
      </div>
    );
  }

  renderCatsGameText() {
    return (
      <div style={{ paddingTop: "1.75rem" }}>
        <h1 className="text-center">CATS GAME</h1>
      </div>
    );
  }

  renderHtml() {
    if (this.props.gameState.catsGame === true) {
      return this.renderCatsGameText();
    } else if (this.props.gameState.winner === null) {
      return (
        <div style={{ paddingTop: "1.75rem" }}>
          <h1 className="text-center">PECK-SCRATCH-GO</h1>
        </div>
      );
    } else if (this.props.gameState.winner) {
      return this.renderWinnerText();
    }
  }

  render() {
    return (
      <div className="headerDiv">
        <header className="">{this.renderHtml()}</header>
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
