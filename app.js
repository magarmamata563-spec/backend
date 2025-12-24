import express from 'express'
import connectdb from './config/db.js'
import { authRoute } from './routes/authRoute.js'
import { productRoute } from './routes/productRoute.js'
import { categoryRoute } from './routes/categoryRoute.js'
import cookieParser from 'cookie-parser'
import cors from 'cors'


const app= express()

app.use(cors({
    origin:['htpps://localhost:5173','https://frontend-pink-chi-16.vercel.app/']
}))

app.use(express.json())
app.use(cookieParser())

connectdb()

app.use('/auth',authRoute)
app.use('/product',productRoute)
app.use('/category',categoryRoute)


app.listen(3600,()=>{
    console.log("server is running..");
})