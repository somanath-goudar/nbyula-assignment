"use client"

import Link from "next/link"
import React, { useState } from "react"
import { signIn } from "next-auth/react"
import "../../styles/globals.css"

const Login = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const submitHandler = async (e) => {
    e.preventDefault()

    try {
      const data = await signIn("credentials", {
        redirect: true,
        email,
        password,
        callbackUrl: "/dashboard",
      })
      console.log(data)
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div className="login-wrapper">
      <form className="login-form" onSubmit={submitHandler}>
        <h1>Login</h1>
        <div className="form-group">
          <label className="form-label" htmlFor="email_field">
            Email address
          </label>
          <input placeholder="Enter email" type="email" id="email_field" className="form-input" value={email} onChange={(e) => setEmail(e.target.value)} />
        </div>

        <div className="form-group">
          <label className="form-label" htmlFor="password_field">
            Password
          </label>
          <input placeholder="Enter password" type="password" id="password_field" className="form-input" value={password} onChange={(e) => setPassword(e.target.value)} />
        </div>

        <button type="submit" className="btn">
          Sign in
        </button>
      </form>
    </div>
  )
}

export default Login
