"use client"

import axios from "axios"
import React, { useState } from "react"

const Register = () => {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const submitHandler = async (e) => {
    e.preventDefault()

    try {
      const { data } = await axios.post("/api/register", {
        name,
        email,
        password,
      })

      console.log(data)
      alert("User created Successfully! Please Login")
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div className="register-wrapper">
      <form className="register-form" onSubmit={submitHandler}>
        <h1 className="">Register</h1>

        <div className="form-group">
          <label className="form-label" htmlFor="name_field">
            Name
          </label>
          <input placeholder="Enter name" type="text" id="name_field" className="form-input" value={name} onChange={(e) => setName(e.target.value)} />
        </div>

        <div className="form-group">
          <label className="form-label" htmlFor="email_field">
            Email address
          </label>
          <input placeholder="Enter Email" type="email" id="email_field" className="form-input" value={email} onChange={(e) => setEmail(e.target.value)} />
        </div>

        <div className="form-group">
          <label className="form-label" htmlFor="password_field">
            Password
          </label>
          <input placeholder="Enter password" type="password" id="password_field" className="form-input" value={password} onChange={(e) => setPassword(e.target.value)} />
        </div>

        <button type="submit" className="btn">
          Register
        </button>
      </form>
    </div>
  )
}

export default Register
