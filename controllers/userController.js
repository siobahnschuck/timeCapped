const { User } = require('../models/User')

const createUser = async (req, res) => {
    try{
    console.log(req.body)
    const user = await new User({...req.body})
    await user.save()
    res.send(user)
    return res.status(201).json({
        user
    })
    }catch(error) {
        res.status(500).json({msg: error.message})
    }
}

const getAllUsers = async (req, res) => {
    try{
    const users = await User.find()
    return res.status(200).json({ users })
    }catch (error) {
        res.json(error)
    }
}





module.exports= {
    createUser,
    getAllUsers
}