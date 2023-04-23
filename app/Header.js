import Link from "next/link"
import React from "react"
import { signOut, useSession } from "next-auth/react"
import "../styles/globals.css"

const Header = () => {
  const { data } = useSession()

  const handleSignout = () => {
    signOut()
  }

  return (
    <nav className="navbar">
      <Link className="logo" href="/dashboard">
        TerraScheduler
      </Link>

      <div className="">
        {data?.user ? (
          <>
            <span className="userDisplay">Hi, {data?.user?.name}</span>

            <span className="btn" onClick={() => handleSignout()}>
              {" "}
              Logout
            </span>
          </>
        ) : (
          <>
            <span>
              {" "}
              <Link className="btn" href="/login">
                Login
              </Link>
            </span>
            <span>
              {" "}
              <Link className="btn" href="/register">
                Register
              </Link>
            </span>
          </>
        )}
      </div>
    </nav>
  )
}

export default Header
