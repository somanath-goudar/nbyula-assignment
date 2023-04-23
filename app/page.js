import React from "react"
import { redirect } from "next/navigation"

const HomePage = () => {
  redirect("/dashboard")
  return <div>HomePage</div>
}

export default HomePage
