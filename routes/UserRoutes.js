const UserRouter = require('express').Router()
const controller = require('../controllers/userController')

UserRouter.get('/user', controller.getAllUsers)
UserRouter.post('/user/new', controller.createUser)

module.exports = UserRouter