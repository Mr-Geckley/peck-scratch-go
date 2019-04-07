import React, { Component } from "react";
import SetPlayer from "./SetPlayer";
import ScoreBoard from "./ScoreBoard";
import { connect } from "react-redux";

class Footer extends Component {
  handleSetPlayer(e) {
    this.props.setPlayer(e);
  }

  handleReset() {
    this.props.reset();
  }

  renderHtml() {
    if (
      this.props.gameState.winner === null &&
      this.props.gameState.player === null
    ) {
      return <SetPlayer />;
    } else if (this.props.gameState.player) {
      return <ScoreBoard />;
    }
  }
  render() {
    return <span>{this.renderHtml()}</span>;
  }
}

function mapStateToProps(state) {
  return {
    gameState: state.game
  };
}

export default connect(mapStateToProps)(Footer);
