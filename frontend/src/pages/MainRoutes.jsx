// import React from 'react'

import { Route, Routes } from "react-router-dom"
import Homepage from "./Homepage"
import Signup from "./Signup"
import Login from "./login"
import AddNew from "./AddNew"
import PrivateRoute from "../HOF/PrivateRoute"

const MainRoutes = () => {
  return (
    <div>
        <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/addnew" element={<PrivateRoute> <AddNew /> </PrivateRoute>} />

        </Routes>
    </div>
  )
}

export default MainRoutes