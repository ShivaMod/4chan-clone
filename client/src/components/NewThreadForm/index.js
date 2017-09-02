// npm packages
import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Form, Input, TextArea } from "formsy-semantic-ui-react";

import { createThread } from "../../actions/threadsActions";

class NewThreadForm extends Component {
  constructor(props) {
    super(props);
    console.dir(props);
  }
  componentDidMount() {
    console.log("We mounted", this.props);
  }
  submitForm = data => {
    this.props.createThread(this.props.boardSlug, data).then(() => {
      const { newThread } = this.props;
      if (newThread) {
        window.location.href = `/${this.props.boardSlug}/thread/${newThread.id}`;
        //TODO: Maybe use react router to redirect ?
      }
    });
  };
  render() {
    return (
      <Form onValidSubmit={this.submitForm}>
        <Input name="name" label="Name" />
        <Input name="subject" label="Subject" />
        <TextArea name="comment" label="Comment" />
        <Input name="file" label="File" />
        <Form.Button content="Submit" />
      </Form>
    );
  }
}

const mapStateToProps = state => ({
  thread: state.threads.thread,
  newThread: state.threads.newThread,
  threadPending: state.threads.pending,
  threadError: state.threads.error
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      createThread
    },
    dispatch
  );

export default connect(mapStateToProps, mapDispatchToProps)(NewThreadForm);
