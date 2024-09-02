const express = require("express");
const {Readfile,UpdateFile,WriteFile,deleteRecord} = require("./Helpers/fileModulefunctions")
const app = express();
const router = require("./Routes/routes")
app.use(express.json());

app.use("/v1",router);


const PORT = 3000 ;

app.get("/", (req, res) => {
	return res.json({
		success:true,
		message:'Your server is up and running....'

	});
});

app.listen(3000,()=>{
    console.log(`Server Started Successfully at ${PORT}`)
})