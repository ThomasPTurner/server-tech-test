const express = require('express')
const cors = require('cors')
const app = express()
const apiRouter = require('./routers/apiRouter')

app.use(cors())
app.use('/api', apiRouter)

module.exports = app