const mongoose = require('mongoose')
const NoticeBoardModel = new mongoose.Schema(
  {
    notice: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
  },
  { timestamps: true, versionKey: false },
)
module.exports = mongoose.model('noticeBoardModel', NoticeBoardModel)
