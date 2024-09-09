const express = require("express");
const app = express();
const mongoose = require("mongoose");
const { getMovies } = require("./controller/aggregation");
const router = require("./routes/routes");
mongoose.connect("mongodb://localhost:27017/DummyData").then(()=>console.log("DB Connected")).catch(()=>console.log("Error Connecting DB"))

app.use("/aggregation",router)
app.listen(3000,()=>{
    console.log("Server Started");
})