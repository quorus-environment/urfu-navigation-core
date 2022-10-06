import express, { Request, Response } from "express";

const PORT = process.env.PORT || 8080

const app = express()

app.get('/', (req: Request, res: Response) => {
    res.send('HUY + huy + ultrahuy sdfsdf')
})

app.listen(PORT, () => console.log(`server started on post ${PORT}`))