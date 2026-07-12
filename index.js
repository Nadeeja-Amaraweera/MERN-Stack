import express from "express";
import mongoose from "mongoose";
import studentRouter from "./routers/studentRouter.js";

const app = express();

const mongo_URI = "mongodb+srv://admin:1234@cluster0.9kpoisv.mongodb.net/icomputers?appName=Cluster0";

// Connect to MongoDB
mongoose.connect(mongo_URI)
    .then(() => {
        console.log("MongoDB Connected!");

        app.listen(3000, () => {
            console.log("Server is running on port 3000");
        });
    })
    .catch((err) => {
        console.error(err);
    });

app.use(express.json());
app.use("/students", studentRouter);                                                                                                                                            
