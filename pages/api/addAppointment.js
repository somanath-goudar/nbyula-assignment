import dbConnect from "../../config/dbConnect"
import User from "../../models/user"
import { ObjectId } from "mongoose"

export default async function handler(req, res) {
  if (req.method === "POST") {
    let data = JSON.parse(req.body)
    console.log(data)
    dbConnect()
    let result = await User.updateOne({ _id: data.id }, { $push: { appointments: data } })
    console.log(result)
    res.status(200).json("Success")
  }
}
