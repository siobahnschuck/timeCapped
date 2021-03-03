const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Text = new Schema(
  {
    text: { type: String, required: true },
    user_id: [{ type: Schema.Types.ObjectId, ref: 'user' }]
  },
  { timestamps: true }
)

module.exports = mongoose.model('text', Text)
