import Express from "express";
const app = Express()
import {router as tasks} from "./routers/tasks.js"
import { connectDB } from "./db/connect.js";
import dotenv from 'dotenv'
import { notFound } from "./middleware/not-found.js";
import { errorHandleMiddleware } from "./middleware/errorhandlermiddleware.js";

dotenv.config()

app.use(Express.static('./public'))
app.use(Express.json())
app.use('/api/v1/tasks',tasks)
app.use(notFound)
app.use(errorHandleMiddleware)


const port = 3000
const start = async () => {
    try {
        await connectDB(process.env.MONGO_URI)
        app.listen(port,()=>{
            console.log(`server lisenting on port ${port}...`)
        })
    } catch (error) {
        console.log(error)
    }
}

start()