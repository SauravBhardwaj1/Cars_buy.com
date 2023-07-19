// import React from 'react'

import { Route, Routes } from "react-router-dom"
import Homepage from "./Homepage"
import Signup from "./Signup"
import Login from "./login"

const MainRoutes = () => {
  return (
    <div>
        <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            
        </Routes>
    </div>
  )
}

export default MainRoutes