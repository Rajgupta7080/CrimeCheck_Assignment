import React from 'react'
import { Route, Routes } from 'react-router-dom'
import UserLogin from '../../Pages/Login/UserLogin'
import Notice from '../../Pages/Notice/Notice'
const Allroutes = () => {
  return (
    <Routes>
      <Route path="/" element={<UserLogin />}></Route>
      <Route path="/NoticeBoard" element={<Notice />}></Route>
    </Routes>
  )
}

export default Allroutes
