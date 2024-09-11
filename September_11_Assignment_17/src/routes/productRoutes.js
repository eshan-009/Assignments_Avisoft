const express = require("express");
const router = express.Router();
const {addProduct} = require("../controllers/addProduct");
const {auth,isSeller} = require("../middleware/auth");
const { getProducts } = require("../controllers/getProducts");
const {updateProductStatus} = require("../controllers/updateProductStatus");
const { updateProduct } = require("../controllers/updateProduct");
const { deleteProduct } = require("../controllers/deleteProduct");

router.post("/addProduct",auth,isSeller,addProduct)
router.get("/getProducts",getProducts)
router.get("/getProducts/:id",getProducts)
router.put("/updateProduct/:id",auth,isSeller,updateProduct)
router.patch("/updateProductStatus/:id",auth,isSeller,updateProductStatus)
router.delete("/deleteProduct/:id",auth,isSeller,deleteProduct)

module.exports = router