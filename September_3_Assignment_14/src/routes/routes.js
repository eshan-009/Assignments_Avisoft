const express = require("express");
const { postProduct, getProduct,putProduct,deleteProduct,patchProduct } = require("../controllers/operations");
const {postValidation,putValidation,patchValidation}= require("../middlewares/ProductValidation");
const router = express.Router();

router.get("/GET/:id?",getProduct);
router.put("/PUT/:id",putValidation,putProduct);
router.patch("/PATCH/:id",patchValidation,patchProduct);
router.post("/POST",postValidation,postProduct);
router.delete("/DELETE/:id",deleteProduct);

module.exports = router