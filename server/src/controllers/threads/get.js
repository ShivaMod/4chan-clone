import db from "../../db/models";
import * as threadConstants from "./constants";

const threadsGets = {
  /**
   * Retrieves a thread by the id provided. Contains all of the threads comments.
  */
  getOne(req, res) {
    if (!req.query.board) {
      res.status(400).json({ error: "Missing parameter." });
      return;
    }
    const boardWhereField = !isNaN(req.query.board)
      ? { id: req.query.board }
      : { slug: req.query.board };
    let params = {
      where: { id: req.params.id },
      // FIXME: Look into doing this right... ?
      include: [
        {
          model: db.Boards,
          as: "boards",
          where: boardWhereField,
          attributes: []
        },
        {
          model: db.Comments,
          as: "comments"
        }
      ]
    };

    return db.Threads
      .findOne(params)
      .then(thread => {
        if (thread === null) {
          res.status(404).json({ error: threadConstants.THREAD_NOT_FOUND });
          return;
        }
        res.json(thread);
      })
      .catch(err => {
        console.dir(err);
        res.json({ error: threadConstants.THREAD_DB_ERROR });
      });
  }
};

export default threadsGets;
