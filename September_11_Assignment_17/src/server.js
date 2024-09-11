const express = require("express");
const app = express();
const dbConnect = require("./config/database");
const routeIndex = require("./routes/routeIndex")
var cookieParser = require('cookie-parser')
require("dotenv").config()
const PORT =process.env.PORT || 4000;


dbConnect();

app.use(cookieParser());
app.use(express.json());

app.use("/api",routeIndex)

app.listen(PORT,()=>{
    console.log(`Server Started Successfully at ${PORT}`);
})