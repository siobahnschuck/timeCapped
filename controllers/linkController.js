const Link = require('../models/linkSub')

const createLink = async (req, res) => {
    try{ 
        const link = await Link.create(req.body)
        res.send(link)
    } catch (error){
        res.json(error)
    }
}

const getLink = async (req, res) => {
    try{
        const link = await Link.find()
        res.send(link)
    }catch (error){
        res.status(500).json({msg: error.message})
    }
}

const deleteLink = async (req, res) => {
    try{
        await Link.deleteOne({_id: req.params.link_id})
        res.send({ msg: 'link deleted', payload: req.params.link_id, status: 'Ok' })
    }catch (error){
        res.status(500).json({msg: error.message})
    }
}

module.exports = {
    createLink,
    getLink, 
    deleteLink,
}