import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { consLogClick } from "../../actions/gamePlayActions";
// import { changeContent } from "../../actions/gamePlayActions";

import { connect } from "react-redux";
import SetPlayer from "./SetPlayer";

class Test extends Component {
  // -------------------------- Test Functions----------------------------------------
  createListItems() {
    return this.props.gameState.cknArray.map((token, index) => {
      return (
        <li key={index} onClick={() => this.props.consLogClick(token)}>
          {token}
        </li>
      );
    });
  }

  // testClick(e) {
  //   e.preventDefault();
  //   this.props.consLogClick();
  // }

  meh(e) {
    console.log("meh");
  }

  // ------------------------- GAME LOGIC ---------------------------

  // * create a place to play
  renderBoard() {
    return this.props.gameState.board.map((box, index) => (
      <button
        onClick={() => this.meh(this.props.gameState.board[index].innerHTML)}
        className="box btn btn-primary"
        key={index}
      >
        {box}
        check
      </button>
    ));
  }

  // // * handle the click event
  // handleClick(index) {
  //   if (this.props.gameState.player && !this.props.gameState.winner) {
  //     let newBoard = this.props.gameState.board;
  //     if (this.props.gameState.board[index] === "") {
  //       newBoard[index] = this.generateToken();
  //       this.setState({
  //         board: newBoard,
  //         player: this.props.gameState.player === "🐔" ? "🐱" : "🐔"
  //       });
  //     }

  //   this.checkWinner();
  //   this.checkCatsGame();
  // }
  // }

  // -------------------- LIFE CYCLE METHODS ---------------------------
  componentDidMount() {
    if (!this.props.user.isAuthenticated) {
      this.props.history.push("/");
    }
  }

  componentWillReceiveProps(nextProps) {
    if (!nextProps.user.isAuthenticated) {
      this.props.history.push("/");
    }
  }
  // ----------------------- RENDER FUNCTION---------------------------------
  render() {
    return (
      <div>
        <h2>Hi</h2>
        <hr />
        <h2>Ary Deets</h2>
        <ul>{this.createListItems()}</ul>
        <div className="game-board">{this.renderBoard()}</div>
        <SetPlayer />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    gameState: state.game,
    user: state.user
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ consLogClick: consLogClick }, dispatch);
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Test);
