const NoticeBoardModel = require('../Models/NoticeBoardModel')

const Notice = async (req, res) => {
  try {
    let note = req.body
    let createNote = await NoticeBoardModel.create(note)
    res.status(200).send({
      message: 'Note added succesfully',
      Notice: createNote,
    })
  } catch (error) {
    res.status(500).send({ error: error })
  }
}

module.exports = Notice
