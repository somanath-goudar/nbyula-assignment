import NextAuth from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials"

import User from "../../../models/user"
import bcrypt from "bcryptjs"
import dbConnect from "../../../config/dbConnect"
import Credentials from "next-auth/providers/credentials"

export default NextAuth({
  session: {
    strategy: "jwt",
  },
  providers: [
    Credentials({
      id: "credentials",
      name: "Credentials",
      async authorize(credentials, req) {
        dbConnect()

        const { email, password } = credentials

        const user = await User.findOne({ email })

        if (!user) {
          throw new Error("Invalid Email or Password")
        }

        const isPasswordMatched = await bcrypt.compare(password, user.password)

        if (!isPasswordMatched) {
          throw new Error("Invalid Email or Password")
        }

        return user
      },
    }),
  ],
  pages: {
    signIn: "/login",
  },
  secret: process.env.NEXTAUTH_SECRET,
})
