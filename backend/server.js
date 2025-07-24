
import express from 'express'
import cors from 'cors'
import 'dotenv/config'
import connectDB from './config/mongodb.js'
import userRoute from './routes/userRoute.js'
import fileRoute from './routes/fileRoute.js'
import adminRoute from './routes/adminRoute.js'

const app = express()
const port = process.env.PORT ||8000









// Example: 20MB
app.use(express.json({ limit: '20mb' }));
app.use(express.urlencoded({ extended: true, limit: '20mb' }));

app.use(cors())
connectDB()

app.use('/api/user',userRoute)
app.use('/api/files',fileRoute)
app.use('/api/admin',adminRoute)

console.log("jeet at server");

app.get('/',(req,res)=>{
    res.send("API is working now  ")
    console.log("api is working");
    
})

app.listen(port,()=>(console.log(`app is listening on port:${port}`)))











