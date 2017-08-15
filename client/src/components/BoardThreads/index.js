// npm packages
import React from "react";
import { Item } from "semantic-ui-react";
import moment from "moment";
import { Link } from "react-router-dom";

import "../../assets/css/BoardThreads.css";

// constructs the view for threads in a board, NOT the individual thread.
const BoardThreads = ({ threads, boardSlug }) => {
  if (!threads) {
    return <p>No threads on this board!</p>;
  }
  const allThreads = threads.map((thread, i) => {
    return (
      <Item className="thread" key={thread.id}>
        <Item.Image size="small" src={thread.file} />
        <Item.Content>
          <Item.Header className="subject">
            <Link to={`/${boardSlug}/thread/${thread.id}`}>
              {thread.subject}
            </Link>
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
    );
  });
  return (
    <Item.Group divided>
      {allThreads}
    </Item.Group>
  );
};

export default BoardThreads;
