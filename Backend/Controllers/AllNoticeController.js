const NoticeBoardModel = require('../Models/NoticeBoardModel')

const GetAllNotice = async (req, res) => {
  try {
    let AllNotices = await NoticeBoardModel.find()
    res.status(200).send({
      Notice: AllNotices,
    })
  } catch (error) {
    res.status(500).send({ error: error })
  }
}
module.exports = GetAllNotice
