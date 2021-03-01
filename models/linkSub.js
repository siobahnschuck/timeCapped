const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Link = new Schema(
    {
        url: { type: String, required: true}, 
        user_id: [{ type: Schema.Types.ObjectId, ref: 'user'}]
    }, 
    { timestamps: true}
)

module.exports = mongoose.model('link', Link)