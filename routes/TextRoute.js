const TextRouter = require('express').Router()
const controller = require('../controllers/textController')

TextRouter.get('/text/view', controller.getText)
TextRouter.post('/text/add', controller.createText)
TextRouter.delete('/text/delete/:textid', controller.deleteText)

module.exports = TextRouter
