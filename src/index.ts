import express from "express"
import * as dotenv from "dotenv"
import cors from "cors"
import { seq } from "./model/db"
import { Institute } from "./model/navigation/institutes"
import { Section } from "./model/navigation/section"
import { Floor } from "./model/navigation/floor"
import { Auditorium } from "./model/navigation/auditorium"
import { instituteRouter } from "./routes/institute-router"
import { auditoriumRouter } from "./routes/auditorium-router"
import { userRouter } from "./routes/user-router"
import { User } from "./model/user/user"

// defining config
const PORT = process.env.PORT || 8080
dotenv.config()

const app = express()

// settings
app.use(cors())
app.use(express.json())
// sync models with db
const syncModel = async () => {
  await seq.sync()
  await Institute.sync()
  await Section.sync()
  await Floor.sync()
  await Auditorium.sync()

  await User.sync()
}

app.use("/institutes", instituteRouter)
app.use("/users", userRouter)
app.use("/auditoriums", auditoriumRouter)

app.listen(PORT, async () => {
  await syncModel()
  console.log(`server started on post ${PORT}`)
})
