import express, { Request, Response } from "express"
import * as dotenv from "dotenv"
import cors from "cors"
import { seq } from "./model/db"
import { Institute } from "./model/institutes"
import { Section } from "./model/section"
import { Floor } from "./model/floor"
import { Auditorium } from "./model/auditorium"
import { instituteRouter } from "./routes/institute-router"
import { auditoriumRouter } from "./routes/auditorium-router"

// defining config
const PORT = process.env.PORT || 8080
dotenv.config()

const app = express()

// settings
app.use(cors())

// sync models with db
const syncModel = async () => {
  await seq.sync()
  await Institute.sync()
  await Section.sync()
  await Floor.sync()
  await Auditorium.sync()
}

app.use("/institutes", instituteRouter)
app.use("/auditoriums", auditoriumRouter)

app.listen(PORT, async () => {
  await syncModel()
  console.log(`server started on post ${PORT}`)
})
