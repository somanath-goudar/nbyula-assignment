"use client"
import React, { useEffect, useState } from "react"
import { useSession } from "next-auth/react"
import "../../../styles/globals.css"

const page = ({ params }) => {
  const [title, setTitle] = useState("")
  const [agenda, setAgenda] = useState("")
  const [time, setTime] = useState("")
  const [guest, setGuest] = useState("")
  const [user, setUser] = useState("")
  const { data } = useSession()

  let id = params.id
  const getUser = async () => {
    let res = await fetch(`/api/user/${id}`)
    let user = await res.json()
    setUser(user)
    setGuest(user.name)
  }
  useEffect(() => {
    getUser()
  }, [])
  const handleSubmit = (e) => {
    e.preventDefault()
    const payload = {
      id: user._id,
      bokker: data.user.email,
      title: title,
      agenda: agenda,
      time: time,
      guest: guest,
    }
    fetch("/api/addAppointment", {
      method: "POST",
      body: JSON.stringify(payload),
    })
    console.log("booked")
    window.location.reload()
  }
  return (
    <div className="appointment-wrapper">
      <p className="appointment-title">Schedule an appointment with {user.name}</p>
      <form className="appointment-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label className="form-label" htmlFor="title">
            Title
          </label>
          <input className="form-input" type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
        </div>
        <div className="form-group">
          <label className="form-label" htmlFor="agenda">
            Agenda
          </label>
          <input className="form-input" type="text" value={agenda} onChange={(e) => setAgenda(e.target.value)} />
        </div>
        <div className="form-group">
          <label className="form-label" htmlFor="time">
            Time
          </label>
          <input className="form-input" type="time" value={time} onChange={(e) => setTime(e.target.value)} />
          {/* <DatePicker selected={date} onChange={(date) => setDate(date)} showTimeSelect dateFormat="MMMM d, yyyy h:mm aa" /> */}
        </div>
        <div className="guest-container">
          <label className="form-label" htmlFor="guest">
            Guest:
          </label>
          <span> {guest}</span>
        </div>
        <button className="btn">Schedule</button>
      </form>

      <div className="display-appointments">
        <p className="display-title">{user.name}'s Appointments</p>
        {user.appointments && user.appointments[0]?.title ? (
          <ul>
            {user.appointments.map((appointment) => (
              <div key={appointment.title}>
                {appointment.title && (
                  <p className="appointment">
                    <b>Title:</b> {appointment.title} <b>With:</b> {appointment.bokker} <b>at </b>
                    {appointment.time}
                  </p>
                )}
              </div>
            ))}
          </ul>
        ) : (
          "No appointments to show"
        )}
      </div>
    </div>
  )
}

export default page
