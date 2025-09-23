import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
import {connectDb} from "./config/db.js";
import notesRoute from "./routes/notesRoute.js";

const app = express();
const PORT = process.env.PORT || 5000;
connectDb();
app.use(cors());
app.use("/api/notes", notesRoute);
app.listen(PORT, () => {
    console.log("Server Runing on PORT ${PORT}");
})
