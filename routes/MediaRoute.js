const MediaRouter = require('express').Router()
const controller = require('../controllers/mediaController')

MediaRouter.get('/media/view', controller.getMedia)
MediaRouter.post('/media/add', controller.createMediaSub)
MediaRouter.delete('/media/delete/:mediaid', controller.deleteMedia)
MediaRouter.get('/allc', controller.getRandom)
MediaRouter.delete('/allc', controller.deleteRandom)

module.exports = MediaRouter
