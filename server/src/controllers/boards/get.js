import db from "../../db/models";
import * as boardConstants from "./constants";

const boardsGets = {
  /**
   * Retrieves all boards.
  */
  getAll(req, res) {
    return db.Boards
      .findAll()
      .then(boards => {
        if (boards == null) {
          res.status(404).send({ error: boardConstants.BOARD_NOT_FOUND });
          return;
        }
        res.json(boards);
      })
      .catch(err => {
        console.dir(err);
        res.json({ error: boardConstants.BOARD_DB_ERROR });
      });
  },
  /**
   * Retrieves a board by id or slug name. Limit is 5
  */
  getOne(req, res) {
    let params = {
      where: !isNaN(req.params.id)
        ? { id: req.params.id }
        : { slug: req.params.id },
      include: [
        {
          model: db.Threads,
          as: "threads",
          order: [["createdAt", "asc"]]
        }
      ]
    };

    return db.Boards
      .findOne(params)
      .then(board => {
        if (board === null) {
          res.status(404).send({ error: boardConstants.BOARD_NOT_FOUND });
          return;
        }
        res.json(board);
      })
      .catch(err => {
        console.dir(err);
        res.json({ error: boardConstants.BOARD_DB_ERROR });
      });
  }
};

export default boardsGets;
