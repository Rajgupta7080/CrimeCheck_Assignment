const express = require('express')
const app = express()
app.use(express.json())
const MongoConnection = require('./Configuration/database.js')
const UserName = require('./Controllers/UserController.js')

app.get('/', (req, res) => {
  res.send('CRIMECHECK')
})
app.post('/login', UserName)
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
