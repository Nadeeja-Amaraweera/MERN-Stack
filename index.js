import express from "express";
import mongoose from "mongoose";
import Student from "./models/Student.js";

const app = express();

const mongo_URI = "mongodb+srv://admin:1234@cluster0.9kpoisv.mongodb.net/icomputers?appName=Cluster0";

mongoose.connect(mongo_URI).then(
    () => {
        console.log("MongoDB Connected Successfully!");
    },
    (err) => {
        console.log("MongoDB Connection Failed!", err);
    }
)

app.use(express.json());

app.post("/", (req, res) => {
    console.log(req.body);

    const newStudent = new Student({
        name: req.body.name,
        address: req.body.address
    });

    newStudent.save().then(
        ()=>{
            res.json({
                message: "Student Saved Successfully!"
            });
        }
    );

}); 

app.listen(3000, () => {
    console.log("Server is running on port 3000");
}); 