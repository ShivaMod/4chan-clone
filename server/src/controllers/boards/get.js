
const db = require('../../db/models')

module.exports = (app) => {
  /**
   * Retrieve all the boards created.
   * TODO: Retrieve all boards or paginate ?
   */
  app.get('/api/boards', (req, res) => {
    db.Boards.findAll({limit: 25}).then((boards) => {
      res.json(boards)
    }).catch((err) => {
      console.dir(err)
      res.json({error: 'Database Error.'})
    })
  })

  /**
   * Retrieve the top 25 popular boards based on their rank of popularity.
   * TODO: Actually retrieve boards based on their rank.
   */
  app.get('/api/boards/popular', (req, res) => {
    db.Boards.findAll({limit: 25}).then((boards) => {
      res.json(boards)
    }).catch((err) => {
      console.dir(err)
      res.json({error: 'Database Error.'})
    })
  })

  /**
   * Retrieve a single board with all of it's threads.
   */
  app.get('/api/boards/:id', (req, res) => {
    // before making request...
    let params = {where: !isNaN(req.params.id) ? {id: req.params.id} : {slug: req.params.id}, limit: 25}

    db.Boards.findOne(params)
    .then((board) => {
      if (board === null) {
        res.status(404).send({error: 'Board does not exist.'})
        return
      }
      res.json(board)
    }).catch((err) => {
      console.dir(err)
      res.json({error: 'Database Error.'})
    })
  })
}
