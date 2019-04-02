import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { consLogClick } from "../../actions/gamePlayActions";

import { connect } from "react-redux";
import SetPlayer from "./SetPlayer";

class Test extends Component {
  // "createListItems()" generates an unordered list from state.cknArray. This is just a test function
  createListItems() {
    return this.props.gameState.cknArray.map((token, index) => {
      return (
        <li key={index} onClick={() => this.props.consLogClick(token)}>
          {token}
        </li>
      );
    });
  }

  // "testClick()" console logs the content of a clicked target. This is a test function
  // testClick(e) {
  //   e.preventDefault();
  //   this.props.consLogClick();
  // }

  // ------------------------- GAME LOGIC ---------------------------

  // "renderBoard()" generates the game board, utilizing an array from initial state
  renderBoard() {
    return this.props.gameState.board.map((box, index) => (
      <button
        // TODO: change the onClick function
        onClick={() => this.meh(this.props.gameState.board[index].innerHTML)}
        className="box btn btn-primary"
        key={index}
      >
        {box}
        check
      </button>
    ));
  }

  // -------------------- LIFE CYCLE METHODS ---------------------------/

  componentDidMount() {
    // checks for authentication status and redirects accordingly
    if (!this.props.user.isAuthenticated) {
      this.props.history.push("/");
    }
  }

  componentWillReceiveProps(nextProps) {
    // checks for authentication status and redirects accordingly
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

// the functions below plug in state and functions
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
