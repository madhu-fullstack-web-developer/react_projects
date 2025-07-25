import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
dotenv.config()
import cookieParser from 'cookie-parser'
import morgan from 'morgan'
import helmet from 'helmet'
import connectDB from './config/connectDB.js'
import userRouter from './route/user.route.js'
import productRouter from './route/product.route.js'

const app = express()
app.use(cors({
    credentials : true,
    origin : process.env.FRONTENT_URL
}))
app.use(express.json())
app.use(cookieParser())
app.use(morgan('dev'))
app.use(helmet({
    crossOriginResourcePolicy : false
}))

const PORT = process.env.PORT || 8080;

app.get("/",(request,response)=>{
    ///Server to client
    response.json({
        message : "Server is running " + PORT
    })
})

app.use('/api/user',userRouter)
app.use("/api/products",productRoutes)

connectDB().then(()=>{
    app.listen(PORT,()=>{
    console.log("Server is running",PORT)
    })
})

