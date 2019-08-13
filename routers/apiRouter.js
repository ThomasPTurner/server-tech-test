const { Router } = require('express')
const apiRouter = Router()
const restaurantsRouter = require('./restaurantsRouter')

apiRouter.use('/restaurants', restaurantsRouter)

module.exports = apiRouter