import express from "express";
import mongoose from "mongoose";

const app = express();

let mongo_URI = "mongodb+srv://admin:1234@cluster0.9kpoisv.mongodb.net/?appName=Cluster0";
mongoose.connect(mongo_URI).then(
    () => {
        console.log("MongoDB Connected Successfully!");
    },
    (err) => {
        console.log("MongoDB Connection Failed!", err);
    }
)

app.use(express.json());

app.get("/", (req, res) => {
    res.json({
        message: "Get Request Received!"
    });
});

app.post("/", (req, res) => {
    console.log(req.body);
    res.json({
        message: "Post Request Received!",
        data: req.body
    });
});

app.put("/", (req, res) => {
    res.json({
        message: "Put Request Received!",
        data: req.body
    });
});

app.delete("/", (req, res) => {
    res.json({
        message: "Delete Request Received!",
        data: req.body
    });
});

app.listen(3000, () => {
    console.log("Server is running on port 3000");
}); 