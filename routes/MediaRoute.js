const MediaRouter = require('express').Router()
const controller = require('../controllers/mediaController')

MediaRouter.get('/media/view', controller.getMedia)
MediaRouter.post('/media/add', controller.createMediaSub)
MediaRouter.delete('/media/delete/:media_id', controller.deleteMedia)
MediaRouter.get('/allc', controller.getRandom)
MediaRouter.get('/all/types', controller.getAll)

module.exports = MediaRouter
