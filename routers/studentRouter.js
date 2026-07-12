import express from "express";
import mongoose from "mongoose";
import Student from "../models/Student.js";

const studentRouter = express.Router();

studentRouter.get("/", (req, res) => {
    Student.find().then(
        (students) => {
            console.log("Student Data Fetched Successfully!");
            res.json(students);
        }
    )
});

studentRouter.post("/", (req, res) => {
    console.log(req.body);

    const newStudent = new Student({
        name: req.body.name,
        address: req.body.address
    });

    newStudent.save().then(
        () => {
            res.json({
                message: "Student Saved Successfully!"
            });
        }
    );
});

export default studentRouter;