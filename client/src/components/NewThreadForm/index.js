// npm packages
import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Label } from "semantic-ui-react";
import { Form, Input, TextArea } from "formsy-semantic-ui-react";

import { createThread } from "../../actions/threadsActions";

// TODO: Assure URL they provide is actually an image/valid.

const FormLabel = ({ text }) => (
  <Label style={{ backgroundColor: "#cc1105", color: "white" }}>{text}</Label>
);

class NewThreadForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      submitting: false
    };
  }
  checkURL(url) {
    return url.match(/\.(jpeg|jpg|gif|png)$/) != null;
  }
  submitForm = data => {
    this.setState({ submitting: true });
    this.props.createThread(this.props.boardSlug, data).then(() => {
      this.setState({ loading: false });
      const { newThread } = this.props;
      if (newThread) {
        window.location.href = `/${this.props
          .boardSlug}/thread/${newThread.id}`;
        // TODO: Maybe use react router to redirect ?
      }
    });
  };
  render() {
    return (
      <Form onValidSubmit={this.submitForm} className="container">
        <Input name="name" label={<FormLabel text="Name" />} />
        <Input name="subject" label={<FormLabel text="Subject" />} />
        <TextArea name="comment" label="Comment" required />
        <Input
          name="file"
          type="url"
          label={<FormLabel text="File" />}
          required
        />
        <Form.Button
          style={{ backgroundColor: "#117743", color: "white" }}
          content="Post Thread"
          loading={this.state.submitting}
        />
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
