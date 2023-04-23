import mongoose from "mongoose"

const dbConnect = () => {
  if (mongoose.connection.readyState >= 1) return

  mongoose
    .connect(process.env.DB_URI)
    .then(() => {
      console.log("connected")
    })
    .catch((e) => console.log(e))
}

export default dbConnect
