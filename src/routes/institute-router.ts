import express, { Response } from "express"
import { Institute } from "../model/institutes"

export const instituteRouter = express.Router()

instituteRouter.get("/", async (req, res: Response) => {
  const inst = await Institute.findOne()
  res.json({ institute: inst?.id })
})
