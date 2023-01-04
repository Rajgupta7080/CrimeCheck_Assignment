const mongoose = require('mongoose')
mongoose.set('strictQuery', 'false')

const MongoConnection = async () => {
  await mongoose.connect(
    'mongodb+srv://Rajgupta:Raj1234@crimecheckdata.v9wo4yf.mongodb.net/CrimeCheckData?retryWrites=true&w=majority',
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    },
  )
  console.log('MONGO_DB IS STARTED ')
}

module.exports = MongoConnection
