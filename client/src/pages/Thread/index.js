// npm packages
import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

// our stuff
import { getThread } from "../../actions/threadsActions";

class Thread extends Component {
  constructor(props) {
    super(props);
    this.threadid = props.match.params.threadid;
    this.boardslug = props.match.params.boardslug;
    this.props.getThread(this.threadid, this.boardslug);
  }
  render() {
    if (this.props.threadError) {
      // TODO: Make component for error handling ?
      return (
        <p>
          404 - {this.props.threadError.error}
        </p>
      );
    }
    return (
      this.props.thread &&
      <div>
        Welcome to -> {this.props.thread.subject}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  thread: state.threads.thread,
  threadPending: state.threads.pending,
  threadError: state.threads.error
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      getThread
    },
    dispatch
  );

export default connect(mapStateToProps, mapDispatchToProps)(Thread);
