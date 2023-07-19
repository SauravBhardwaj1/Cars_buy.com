// import React from 'react'

import { useState } from "react"
import { useDispatch } from "react-redux"
import { SignUp } from "../redux/auth/actions"


const Signup = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    
    const dispatch = useDispatch()
    const handleSubmit = (e) => {
        e.preventDefault()
        const data = {
            email,
            password
        }
        dispatch(SignUp(data))
        alert("User Registered Successfully")
        setEmail("")
        setPassword("")
    }

    
  return (
    <div>
        <h2>Signup</h2>
        <form action="" onSubmit={handleSubmit}>
            <input type="email" placeholder="Enter email" value={email} onChange={(e)=>setEmail(e.target.value)} />
            <input type="password" placeholder="Enter password" value={password} onChange={(e)=>setPassword(e.target.value)} />
            <input type="submit" />
        </form>
    </div>
  )
}

export default Signup