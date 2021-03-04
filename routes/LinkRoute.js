const LinkRouter = require('express').Router()
const controller = require('../controllers/linkController')

LinkRouter.get('/link/view', controller.getLink)
LinkRouter.post('/link/add', controller.createLink)
LinkRouter.delete('/link/delete/:link_id', controller.deleteLink)

module.exports = LinkRouter
