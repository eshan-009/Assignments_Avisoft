const express = require("express");
const router = express.Router();
const productRouter = require("./productRoutes");
const authRouter = require("./authRoutes")



router.use("/product",productRouter);

router.use("/auth",authRouter)

module.exports = router