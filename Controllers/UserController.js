const UserModel = require('../Models/UserModel')

const UserName = async (req, res) => {
  try {
    let { name } = req.body
    let data = await UserModel.create({ name: name })
    res.send({ data: data })
  } catch (error) {
    res.send('error', error)
  }
}
module.exports = UserName
