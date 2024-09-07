import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import cors from 'cors';
import CategoryRoute from './routes/categories.js';
import ProductRoute from './routes/products.js';
import BillRoute from './routes/bills.js';
import AuthRoute from './routes/auth.js';
import userRoute from './routes/users.js';
import logger from 'morgan'; 


const app = express();

dotenv.config();
const PORT = 3000;

const connect = async () => {

    try {
        await mongoose.connect(process.env.MONGO_URI, {
           
        });
        console.log('MongoDB connection SUCCESS');
    }
    catch (error) {
        console.log('MongoDB connection FAIL');
        console.log(error);
    }
}

// middlewares
app.use(express.json());
app.use(cors())
app.use(logger("dev"));

app.use("/api/categories", CategoryRoute);
app.use("/api/products", ProductRoute);
app.use("/api/bills", BillRoute);
app.use("/api/auth", AuthRoute);
app.use("/api/users", userRoute);

app.listen(PORT, () => {
    connect();
    console.log(`Server is running on port ${PORT}`);
    });