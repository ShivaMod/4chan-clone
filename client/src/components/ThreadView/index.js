// npm packages
import React from "react";
import { Comment } from "semantic-ui-react";
import moment from "moment";

const ThreadView = ({ thread }) => {
  const comments = thread.comments.map((comment, i) => {
    return (
      <Comment key={i}>
        <Comment.Avatar as="a" src={comment.file} />
        <Comment.Content>
          <Comment.Author as="a">
            {comment.author}
          </Comment.Author>
          <Comment.Metadata>
            <span>{moment(comment.createdAt).format("llll")}</span>
          </Comment.Metadata>
          <Comment.Text>{comment.comment}</Comment.Text>
        </Comment.Content>
      </Comment>
    );
  });
  return (
    <div>
      Welcome to dddd-> {thread.subject}
      <Comment.Group size="large">{comments}</Comment.Group>
    </div>
  );
};

export default ThreadView;
