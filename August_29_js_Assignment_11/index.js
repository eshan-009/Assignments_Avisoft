const {listFiles,createDirectory,ReadFileContent,WritetoFile} =require("./fileSystemModule");


console.log("START START START START START")

listFiles(__dirname);

createDirectory("Assets");

ReadFileContent("Dummytoread.txt");

WritetoFile("data.js","APPLE");

WritetoFile("data.js","MY NAme is Eshan");