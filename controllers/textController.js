const Text = require('../models/textSub')

const createText = async (req, res) => {
    try{ 
        const text = await Text.create(req.body)
        res.send(text)
    } catch (error){
        res.json(error)
    }
}

const getText = async (req, res) => {
    try{
        const text = await Text.find()
        res.send(text)
    }catch (error){
        res.status(500).json({msg: error.message})
    }
}

const deleteText = async (req, res) => {
    try{
        await Text.deleteOne({_id: req.params.text_id})
        res.send({ msg: 'text file deleted', payload: req.params.text_id, status: 'Ok' })
    }catch (error){
        res.status(500).json({msg: error.message})
    }
}

module.exports = {
    createText,
    getText, 
    deleteText,
}