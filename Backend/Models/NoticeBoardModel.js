const mongoose = require('mongoose')
const NoticeBoardModel = new mongoose.Schema(
  {
    notice: {
      type: String,
      minlength: 100,
    },
    name: {
      type: String,
      required: true,
    },
  },
  { timestamps: true, versionKey: false },
)
module.exports = mongoose.model('noticeBoardModel', NoticeBoardModel)
