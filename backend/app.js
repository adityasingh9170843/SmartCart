import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import { dbConnect } from "./config/dbConnect.js";
import { connectCloudinary } from "./config/cloudinary.js";
dotenv.config({quiet: true});

const app = express();
app.use(express.json());
app.use(cors());
app.use(cookieParser());
dbConnect();
connectCloudinary();
const port = process.env.PORT || 5000;



app.get("/", (req, res) => {
    res.send("Hello from server");
}) 




app.listen(port, () => {
    
    console.log(`Server running on port ${port}`);
})