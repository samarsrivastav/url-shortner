import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import urlRoutes from './routes/urlRoutes';
import { rateLimiter } from './middleware/rateLimiter';
import cors from 'cors';
dotenv.config();

const app = express();
app.use(cors())
app.set('trust proxy', true);
app.use(express.json());
app.use(rateLimiter);
app.use('/', urlRoutes);

const connectDb = async () => {
    try {
        const connect = mongoose.connect(process.env.DB_URL || "")
        console.log("db connected")
    } catch (e) {
        console.error("db connection issue")
    }
}
connectDb()
export default app;
