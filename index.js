import express from "express";

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
    res.send("Get Request Received!");
});

app.post("/", (req, res) => {
    console.log(req.body);
    res.send("Post Request Received!");
});

app.put("/", (req, res) => {
    res.send("Put Request Received!");
});

app.delete("/", (req, res) => {
    res.send("Delete Request Received!");
});

app.listen(3000, () => {
    console.log("Server is running on port 3000");
}); 