const express =require('express')
const logger = require('morgan')
const cors = require('cors')
const todoRouter = require('./routes/Todo/todoRouter')

const app = express()
app.use(cors())
app.use(logger('dev'))
app.use(express.json())


module.exports = app