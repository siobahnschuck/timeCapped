const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Media = new Schema(
  {
    url: { type: String, required: true },
    img: {
      data: Buffer,
      type: String,
      required: true
    },
    user_id: [{ type: Schema.Types.ObjectId, ref: 'user' }]
  },
  { timestamps: true }
)

module.exports = mongoose.model('media', Media)
