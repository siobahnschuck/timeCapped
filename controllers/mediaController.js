const Media = require('../models/mediaSub')
const multer = require('multer')

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads')
    },
    filename: (req, file, cb) => {
        cb(null, file.fieldname + '-' + Date.now())
    }
});
 
const upload = multer({ storage: storage })


const createMediaSub = async (req, res) => {
    try {
        let obj = {
            description: req.body.description, 
            img: {
                data: fs.readFileSync(path.join(_dirname + '/uploads' + req.file.filename)), 
                contentType: 'image/png'
            }
        }
        const media = await Media.create({obj})
        return res.status(201).json({ media })
    } catch (error) {
        res.status(500).json({msg: error.message})
    }
}

const getMedia = async (req, res) => {
    try{
        const ranMedia = await Media.find({}, items => {
            res.render('image', {items: items})
        })
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