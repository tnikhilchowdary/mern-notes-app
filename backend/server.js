import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
import {connectDb} from "./config/db.js";

const app = express();
const PORT = process.env.PORT || 5000;
connectDb();
app.use(cors());

app.listen(PORT, () => {
    console.log("Server Runing on PORT ${PORT}");
})
