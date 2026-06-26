import express from 'express';

let app = express();

app.get("/", (req,res)=>{
    console.log("Get request received at /");
    console.log(req);
});

app.post("/", (req,res)=>{
    console.log("Post request received at /");
});

app.put("/", (req,res)=>{
    console.log("Put request received at /");
});

app.delete("/", (req,res)=>{
    console.log("Delete request received at /");
}); 

app.listen(3000, ()=>{
    console.log("Server is running on port 3000");
});