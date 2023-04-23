"use client"

import React, { useEffect, useState } from "react"
import Link from "next/link"
import "../../styles/globals.css"

const page = () => {
  let [users, setUsers] = useState([])

  let getUsers = async () => {
    let res = await fetch("/api/users")
    let data = await res.json()
    setUsers(data)
  }

  useEffect(() => {
    getUsers()
  }, [])

  return (
    <>
      <h2 className="dashboard-title">Terraformers on this platform</h2>
      <div className="dashboard">
        {users.map((user) => (
          <div className="user-card" key={user._id}>
            <p className="user-name">{user.name}</p>
            <Link className="btn" href={`/user/${user._id}`}>
              Book Appointment
            </Link>
          </div>
        ))}
      </div>
    </>
  )
}

export default page
