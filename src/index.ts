import express, { Request, Response } from "express"
import * as dotenv from "dotenv"
import cors from "cors"
import { seq } from "./model/db"
import { Institute } from "./model/institutes"
import { Section } from "./model/section"
import { Floor } from "./model/floor"
import { Auditorium } from "./model/auditorium"

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

app.get("/", async (req: Request, res: Response) => {
  const inst = await Institute.findOne()
  res.json({ institute: inst?.id })
})

app.listen(PORT, async () => {
  await syncModel()
  console.log(`server started on post ${PORT}`)
})
