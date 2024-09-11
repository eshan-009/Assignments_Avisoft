const express = require("express");
const router = express.Router();
const {addProduct} = require("../controllers/addProduct");
const {auth,isSeller} = require("../middleware/auth")

router.post("/addProduct",auth,isSeller,addProduct)

module.exports = router