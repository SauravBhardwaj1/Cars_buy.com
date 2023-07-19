// import React from 'react'

import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"

import { Navigate } from "react-router-dom"
import { SignUp } from "../redux/auth/actions"

const Login = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const isAuth = useSelector((store)=> store.auth)
    const dispatch = useDispatch()
    const handleSubmit = (e) => {
        e.preventDefault()
        const data = {
            email,
            password
        }
        dispatch(SignUp(data))
        setEmail("")
        setPassword("")
    }

    if(isAuth){
        alert("Login successful")
        return <Navigate to="/Dashboard" />
    }else{
    return (
        <div>
            <h2>Login</h2>
            <form action="" onSubmit={handleSubmit}>
                <input type="email" placeholder="Enter email" value={email} onChange={(e)=>setEmail(e.target.value)} />
                <input type="password" placeholder="Enter password" value={password} onChange={(e)=>setPassword(e.target.value)} />
                <input type="password" placeholder="Confirm password" value={password} onChange={(e)=>setPassword(e.target.value)} />
                <input type="submit" />
            </form>
        </div>
      )
    }
}

export default Login