// A straight forward express app.
import express from 'express'
import logger from 'morgan'
import cookieParser from 'cookie-parser'
import bodyParser from 'body-parser'
import dotenv from 'dotenv'
import db from './db/models'
import boardControllers from './controllers/boards'

dotenv.config()
const app = express()
app.use(logger('dev'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(cookieParser())
// simple for now...

boardControllers(app);

if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'));
}

module.exports = app
