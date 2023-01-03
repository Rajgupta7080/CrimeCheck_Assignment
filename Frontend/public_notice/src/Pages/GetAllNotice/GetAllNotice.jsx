import React from 'react'
import './GetAllNotice.css'
import { useState, useEffect } from 'react'
const GetAllNotice = () => {
  const [AllNotice, setAllNotice] = useState([])
  const displayAllNotice = async () => {
    try {
      let result = await fetch(
        'https://crimecheck-notice-board.onrender.com/Notices',
      )
      let data = await result.json()
      setAllNotice(data.Notice.reverse())
      //   console.log(data.Notice)
    } catch (error) {
      console.log(error, 'err')
    }
  }
  //   console.log(AllNotice)
  useEffect(() => {
    displayAllNotice()
  }, [])

  return (
    <div className="AllNotice">
      <h1 id="headingNotice">All Notices</h1>
      <hr id="hrLine" />
      {AllNotice.map((el) => {
        return (
          <div id="DetailsDiv" key={el._id}>
            <h3>Notice</h3>
            <p style={{ border: '2px solid white' }}>{el.notice}</p>
            <div id="nameTime">
              <p>
                <b>Username :-</b> {el.name}
              </p>
              <p>
                <b>Date :- </b> {new Date(el.createdAt).toDateString()}{' '}
              </p>
              <p>
                <b>Time :- </b> {new Date(el.createdAt).toLocaleTimeString()}
              </p>
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default GetAllNotice
