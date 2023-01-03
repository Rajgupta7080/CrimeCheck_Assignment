import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './UserLogin.css'
const UserLogin = () => {
  const [User, SetUser] = useState('')
  const [loading, Setloading] = useState(false)
  const navigate = useNavigate()
  const handleUser = (e) => {
    SetUser(e.target.value)
    // console.log(User)
  }
  const handleSubmit = async () => {
    Setloading(true)

    try {
      let res = await fetch(
        'https://crimecheck-notice-board.onrender.com/login',
        {
          method: 'POST',
          body: JSON.stringify({
            name: User,
          }),
          headers: {
            'Content-Type': 'application/json',
          },
        },
      )

      let res1 = await res.json()

      if (res1.error) {
        alert(res1.error.message)
      } else {
        alert(res1.message)
        navigate('/NoticeBoard')
      }

      Setloading(false)

      console.log(res1)
    } catch (err) {
      console.log(err)
    }
  }
  return (
    <div id="LoginBox">
      <h1>LOGIN</h1>
      <label>Username</label>
      <br />
      <input
        type="text"
        placeholder="Enter Username"
        onChange={handleUser}
        name="user"
        id=""
        value={User}
      />
      <button disable={loading} id="Submit" onClick={handleSubmit}>
        {loading ? 'Loading...' : 'Submit'}
      </button>
    </div>
  )
}

export default UserLogin
