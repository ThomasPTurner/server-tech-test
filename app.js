const express = require('express')
const cors = require('cors')
const app = express()
const apiRouter = require('./routers/apiRouter')

app.use(cors())
app.use('/api', apiRouter)
app.use('/*', (req, res, next) => res.status(404).send({status:404, msg: "not found"}))
app.use((err, req, res, next) => {
    res.status(500).send({status:500, msg:"internal server error"})
})

module.exports = app