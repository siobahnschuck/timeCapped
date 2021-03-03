const AllRouter = require('express').Router()
const controller = require('../controllers/allController')

AllRouter.get('/all', controller.getAllContent)

module.exports = AllRouter
