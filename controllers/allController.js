const Link = require('../models/linkSub')
const Media = require('../models/mediaSub')
const Text = require('../models/textSub')

const getAllContent = async (req, res) => {
  try {
    const link = await Link.find()
    const media = await Media.find()
    const text = await Text.find()
    res.send({
      link,
      media,
      text
    })
  } catch (error) {
    res.status(500).json({ msg: error.message })
  }
}

module.exports = {
  getAllContent
}
