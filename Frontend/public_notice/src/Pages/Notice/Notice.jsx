import React from 'react'
import './Notice.css'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import GetAllNotice from '../GetAllNotice/GetAllNotice'
import { useEffect } from 'react'
const Notice = () => {
  const [notice, setNotice] = useState('')
  const [loading, Setloading] = useState(false)
  const navigate = useNavigate()
  const handleNotice = (e) => {
    setNotice(e.target.value)
  }
  let userName = JSON.parse(localStorage.getItem('username'))
  useEffect(() => {
    return navigate('/')
  })
  const MakeNotice = async () => {
    Setloading(true)
    try {
      let PostNotice = await fetch(
        'https://crimecheck-notice-board.onrender.com/notice',
        {
          method: 'POST',
          body: JSON.stringify({
            notice: notice,
            name: userName,
          }),
          headers: {
            'Content-Type': 'application/json',
          },
        },
      )
      let data = await PostNotice.json()
      setNotice('')
      console.log(data)
      if (data.error) {
        alert(data.error.message)
      } else {
        alert(data.message)
      }
      Setloading(false)
    } catch (error) {
      console.log(error, 'err')
    }
  }
  return (
    <div id="NoticeMainDiv">
      <div id="noticeDiv">
        <h1 id="heading">Post Notice</h1>
        <hr />
        <textarea
          type="textarea"
          name="Notice"
          value={notice}
          onChange={handleNotice}
          id="noticeInput"
        />
        <br />
        <button id="Smtbtn" onClick={MakeNotice}>
          {loading ? 'Loading...' : 'CREATE NOTICE'}
        </button>
      </div>
      <div>
        <GetAllNotice />
      </div>
    </div>
  )
}

export default Notice
