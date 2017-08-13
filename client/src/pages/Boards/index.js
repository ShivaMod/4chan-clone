// npm packages
import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import BoardThreads from "../../components/BoardThreads";

// our stuff
import { getBoard } from "../../actions/boardsActions";

class Boards extends Component {
  constructor(props) {
    super(props);
    this.boardslug = props.match.params.boardslug;
    props.getBoard(this.boardslug);
  }
  render() {
    return (
      this.props.board &&
      <BoardThreads
        threads={this.props.board.threads}
        boardSlug={this.boardslug}
      />
    );
  }
}

const mapStateToProps = state => ({
  board: state.boards.board,
  boardPending: state.boards.pending,
  boardError: state.boards.error
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      getBoard
    },
    dispatch
  );

export default connect(mapStateToProps, mapDispatchToProps)(Boards);
