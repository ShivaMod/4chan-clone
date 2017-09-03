// npm packages
import React from "react";
import { Item } from "semantic-ui-react";
import moment from "moment";
import { Link } from "react-router-dom";

import NewThreadForm from "../NewThreadForm";
import ImageBanner from "../../components/ImageBanner";
import "../../assets/css/BoardThreads.css";

// constructs the view for threads in a board, NOT the individual thread.
const BoardThreads = ({ threads, boardSlug, boardName }) => {
  let allThreads = null;
  if (threads) {
    allThreads = threads.map((thread, i) => {
      return (
        <Item className="thread" key={thread.id}>
          <Item.Image size="small" src={thread.file} />
          <Item.Content>
            <Item.Header className="subject">{thread.subject}</Item.Header>
            <Item.Meta>
              <span className="author">{thread.author}</span>-
              {moment(thread.createdAt).format("llll")}
            </Item.Meta>
            <Item.Description>{thread.comment}</Item.Description>
            <Item.Extra className="threadextra">
              <p>
                <Link to={`/${boardSlug}/thread/${thread.id}`}>Click Here</Link>
                to view Thread
              </p>
            </Item.Extra>
          </Item.Content>
        </Item>
      );
    });
  } else {
    allThreads = <p>No threads on this board!</p>;
  }
  return (
    <div>
      <ImageBanner />
      <div className="boardTitle">{`/${boardSlug}/ - ${boardName}`}</div>
      <br />
      <NewThreadForm boardSlug={boardSlug} />
      <Item.Group divided>{allThreads}</Item.Group>
    </div>
  );
};

export default BoardThreads;
