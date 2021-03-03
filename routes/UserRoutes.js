const { Router } = require('express')
const UserRouter = Router()
const controller = require('../controllers/userController')

UserRouter.get('/user', controller.getAllUsers)
UserRouter.post('/user/new', controller.createUser)

module.exports = UserRouter
