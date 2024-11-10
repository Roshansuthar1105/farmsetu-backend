import express from 'express';
import dotenv from 'dotenv';
import connect from './db/connectdb.js';
import user from './routes/userRoute.js'
import cors from 'cors';
dotenv.config();
const app = express();

const corsOption = {
    origin:process.env.CLIENT_CORS,
    methods:"POST , PUT , GET , DELETE , PATCH ,HEAD",
    credentials:true
}
app.use(cors(corsOption));
app.use(express.json());
app.use('/api/v1/user',user);
app.get('/b',(req,res)=>{
    res.send("welcome to backend");
})


const port = process.env.PORT || 5000;
connect(process.env.MONGO_DB_URL)
app.listen(port,()=>{
    console.log(`Backend is running at : http://localhost:${port}`);
})