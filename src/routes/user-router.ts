import express, { Request } from "express"
import jwt, { JwtPayload } from "jsonwebtoken"
import { User } from "../model/user/user"
import { Op } from "sequelize"

export const userRouter = express.Router()

userRouter.get("/refresh", (req, res) => {
  const token = req.headers.authorization?.split(" ")[1]
  if (!token) {
    return res.status(401).send("Unauthorized")
  }
  const data = jwt.verify(token, "p123p123p123", {
    algorithms: ["RS256"],
  }) as JwtPayload

  const newToken = jwt.sign({ id: data.id }, "p123p123p123", {
    algorithm: "RS256",
  })
  res.json({ accessToken: newToken, id: data.id })
})

userRouter.post(
  "/sign-in",
  async (req: Request<{ username: string; password: string }>, res) => {
    console.log(req.body)
    const { username, password } = req.body
    if (!username || !password) {
      return res.status(401).send("Unauthorized")
    }
    const data = await User.findOne({
      where: { username: { [Op.eq]: username } },
    })
    if (data?.password !== password) {
      return res.status(403).send("Invalid password")
    }
    const newToken = jwt.sign({ id: data?.id }, "p123p123p123", {
      algorithm: "RS256",
    })
    res.json({ accessToken: newToken, id: data?.id })
  },
)
userRouter.post("/sign-up", async (req: Request, res) => {
  const { username, password, email } = req.body
  if (!username || !password) {
    return res.status(401).send("Unauthorized")
  }
  const ip = req.headers["x-forwarded-for"] || req.socket.remoteAddress
  const newUser = await User.create({
    username,
    password,
    email: email,
    ip: [ip],
  })
  const newToken = jwt.sign({ id: newUser?.id }, "p123p123p123", {
    algorithm: "RS256",
  })
  res.json({ accessToken: newToken, id: newUser.id })
})
