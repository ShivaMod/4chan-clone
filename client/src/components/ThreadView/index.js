// npm packages
import React from "react";
import { Comment, Item } from "semantic-ui-react";
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
            <span>
              {moment(comment.createdAt).format("llll")}
            </span>
          </Comment.Metadata>
          <Comment.Text>
            {comment.comment}
          </Comment.Text>
        </Comment.Content>
      </Comment>
    );
  });
  return (
    <div>
      <Item className="thread" key={thread.id}>
        <Item.Image size="small" src={thread.file} />
        <Item.Content>
          <Item.Header className="subject">
            {thread.subject}
          </Item.Header>
          <Item.Meta>
            <span className="author">{thread.author}</span>-
            {moment(thread.createdAt).format("llll")}
          </Item.Meta>
          <Item.Description>
            {thread.comment}
          </Item.Description>
        </Item.Content>
      </Item>
      <Comment.Group size="large">
        {comments}
      </Comment.Group>
    </div>
  );
};

export default ThreadView;
