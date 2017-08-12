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
     * Retrieves a board by id or slug name.
     * If integer, retrieves it by number, else it'll attempt to get it by the slug name.
     */
  getOne(req, res) {
    let params = {
      where: !isNaN(req.params.id)
        ? { id: req.params.id }
        : { slug: req.params.id },
      limit: 25
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
