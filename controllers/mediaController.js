const Media = require('../models/mediaSub')
const Link = require('../models/linkSub')
const Text = require('../models/textSub')
const User = require('../models/User')

const createMediaSub = async (req, res) => {
  try {
    const media = await new Media(req.body)
    media.save()
    return res.status(201).json({ media })
  } catch (error) {
    res.status(500).json({ msg: error.message })
  }
}

const getMedia = async (req, res) => {
  try {
    const medias = await Media.find()
    return res.status(201).json({ medias })
  } catch (error) {
    res.status(500).json({ msg: error.message })
  }
}

const deleteMedia = async (req, res) => {
  try {
    await Media.deleteOne({ _id: req.params.media_id })
    res.send({
      msg: 'Media file deleted',
      playload: req.params.media_id,
      status: 'Ok'
    })
  } catch (error) {
    res.status(500).json({ msg: error.message })
  }
}

const getRandom = async (req, res) => {
  try {
    let media = await Media.count()
    let text = await Text.count()
    let link = await Link.count()
    let randomMedia = await Media.findOne()
      .skip(Math.floor(Math.random() * media))
      .select('img')
    let randomText = await Text.findOne()
      .skip(Math.floor(Math.random() * text))
      .select('text')
    let randomLink = await Link.findOne()
      .skip(Math.floor(Math.random() * link))
      .select('url')
    let results = [randomMedia, randomLink, randomText]
    res.send(results[Math.floor(Math.random() * results.length)])
  } catch (error) {
    res.status(500).json({ msg: error.message })
  }
}

const getAll = async (req, res) => {
  try {
    let media = await Media.count()
    let text = await Text.count()
    let link = await Link.count()
    let user = await User.count()
    let results = [media, text, link, user]
    res.send(results)
  } catch (error) {
    res.status(500).json({ msg: error.message })
  }
}

module.exports = {
  createMediaSub,
  getMedia,
  deleteMedia,
  getRandom,
  getAll
}
