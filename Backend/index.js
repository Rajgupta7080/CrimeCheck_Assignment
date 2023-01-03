const express = require('express')
const cors = require('cors')
const app = express()
app.use(cors())
app.use(express.json())
const MongoConnection = require('./Configuration/database.js')
const GetAllNotice = require('./Controllers/AllNoticeController.js')
const Notice = require('./Controllers/NoticeController.js')
const UserName = require('./Controllers/UserController.js')

app.get('/', (req, res) => {
  res.send('CRIMECHECK')
})
// User Login Post Request
app.post('/login', UserName)

// Notice post request
app.post('/notice', Notice)

// Get All Notices

app.get('/Notices', GetAllNotice)
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
