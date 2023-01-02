const express = require('express')
const app = express()
const MongoConnection = require('./Configuration/database.js')

app.get('/', (req, res) => {
  res.send('CRIMECHECK')
})
const start = async () => {
  try {
    await MongoConnection()
    app.listen(5000, () => {
      console.log(`Port no 5000 is started`)
    })
  } catch (error) {
    console.log(error)
  }
}
start()
