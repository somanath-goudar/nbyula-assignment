import dbConnect from "../../config/dbConnect"
import User from "../../models/user"

export default async function handler(req, res) {
  dbConnect()
  const users = await User.find()
  res.status(200).json(users)
}
