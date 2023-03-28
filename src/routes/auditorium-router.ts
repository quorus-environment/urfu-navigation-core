import express, { Response } from "express"
import { Auditorium } from "../model/navigation/auditorium"

export const auditoriumRouter = express.Router()

auditoriumRouter.get("/", async (req, res: Response) => {
  const auditorium = await Auditorium.findOne()
  res.json({ auditorium: auditorium?.id })
})
