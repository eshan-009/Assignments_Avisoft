const express = require("express");
const {PORT,bodyparser} = require("./config/server.config.js");
const router = require("./routes/routes")
const app = express();

app.use(bodyparser.json());

app.use("/api",router)

app.listen(PORT,()=>{
    console.log(`Server Started Successsfully at ${PORT}`)
})