const multer = require('multer')
const fs = require('fs')
const path = require('path')

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