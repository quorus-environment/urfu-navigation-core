import express, { Request, Response } from "express";
import { pool } from "./db"
import cors from 'cors'


// Настройка .env файла с креденшиалами
import * as dotenv from 'dotenv'
dotenv.config()
const PORT = process.env.PORT || 8000

/*const userRouter = require('./routes/user.routes')*/

const app = express()
/*https://github.com/Konstaphy/Task_manager*/

app.use(cors())
app.get('/', async (req: Request, res: Response) => {
    // const resp = await pool.query("SELECT * FROM institutes")
    /*запрос с бд*/
    res.json(123)
    /*send в виде JSON "res.json()"*/
})
/*app.use(express.json)
app.use('/api', userRouter)*/

app.listen(PORT, () => console.log(`server started on post ${PORT}`))
