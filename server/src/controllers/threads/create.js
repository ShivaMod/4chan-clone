import db from "../../db/models";
import * as boardConstants from "../boards/constants";
import * as threadConstants from "./constants";

const threadsCreate = {
  /**
   * Creates a new thread. Redirects to the thread if succesful.
  */
  createNewThread(req, res) {
    if (!req.query.board) {
      return res.status(400).json({ error: "Missing parameter." });
    }
    const boardParams = {
      where: { slug: req.query.board }
    };
    db.Boards
      .findOne(boardParams)
      .then(board => {
        if (board === null) {
          return res
            .status(400)
            .send({ error: boardConstants.BOARD_NOT_FOUND });
        }
        db.Threads
          .create({
            boardId: board.id,
            subject: req.body.subject ? req.body.subject : "",
            author: req.body.name ? req.body.name : "Anonymous",
            comment: req.body.comment,
            file: req.body.file
          })
          .then(thread => {
            return res.status(200).json(thread);
            // return res.redirect(`/board/${req.query.slug}/thread/${thread.id}`);
          })
          .catch(() => {
            return res
              .status(500)
              .send({ error: threadConstants.THREAD_DB_ERROR });
          });
      })
      .catch(() => {
        return res.status(500).send({ error: boardConstants.BOARD_DB_ERROR });
      });
  }
};

export default threadsCreate;
