import dbConnect from "../../../config/dbConnect"
import User from "../../../models/user"

export default async function handler(req, res) {
  dbConnect()
  const { id } = req.query
  const user = await User.findById(id)
  res.status(200).json(user)
}
