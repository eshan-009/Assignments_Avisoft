const express = require("express")
require("dotenv").config();
const bodyparser = require("body-parser")
const PORT = process.env.PORT || 8000;

module.exports = {PORT,bodyparser}