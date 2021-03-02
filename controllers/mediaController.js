const Media = require('../models/mediaSub')


const createMediaSub = async (req, res) => {
    try{
        const media = await new Media(req.body)
        media.save()
        return res.status(201).json({media})
    }catch (error){
        res.status(500).json({msg: error.message})
    }
}

const getMedia = async (req, res) => {
    try{
        const medias = await Media.find()
        return res.status(201).json({medias})
    }catch (error){
        res.status(500).json({msg: error.message})
    }
}

const deleteMedia = async (req, res) => {
    try{
        await Media.deleteOne({_id: req.params.media_id})
        res.send({ msg: 'Media file deleted', playload: req.params.media_id, status: 'Ok'})
    }catch (error) {
        res.status(500).json({msg: error.message})
    }
}

module.exports = {
    createMediaSub,
    getMedia, 
    deleteMedia
}