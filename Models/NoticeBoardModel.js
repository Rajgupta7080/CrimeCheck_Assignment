const mongoose = require('mongoose')
const NoticeBoard = new mongoose.Schema({
  notice: {
    type: String,
    required: true,
  },
})
module.exports = mongoose.model('noticeBoard', NoticeBoard)
