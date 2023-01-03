const mongoose = require('mongoose')
const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      validate: {
        validator: /^[0-9a-zA-Z]+$/,
        message: 'Make sure your username only contains alphanumeric character',
      },
    },
  },

  {
    timestamps: true,
    versionKey: false,
  },
)
module.exports = mongoose.model('userName', userSchema)
