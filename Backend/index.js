import express from "express";
import mongoose from "mongoose";
import dotenv from 'dotenv';
import cors from 'cors';
import routes from "./Route/AuthRoute.js";

dotenv.config();

const app = express();
app.use(express.json());
app.use(cors());
app.use('/api',routes);

export const conn = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URL);
        console.log("Database connection successful");
        
    } catch (error) {
        console.log("Error connecting to database:", error);
    }
};

conn();

app.listen(3000, () => {
    console.log("Server is running on port 3000");
});



