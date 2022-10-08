import express, { Request, Response } from "express";
/*import pg;*/

const PORT = process.env.PORT || 8080

const app = express()
/*https://github.com/Konstaphy/Task_manager*/
app.get('/', (req: Request, res: Response) => {
    /*запрос с бд*/
    res.send('HUY + huy + ultrahuy sdfsdf')
    /*send в виде JSON "res.json()"*/
})

app.listen(PORT, () => console.log(`server started on post ${PORT}`))