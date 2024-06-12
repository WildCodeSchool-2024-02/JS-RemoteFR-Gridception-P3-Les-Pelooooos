const express = require("express");

const router = express.Router();

/* ************************************************************************* */
// Import And Use Routers Here
/* ************************************************************************* */

const imagesRouter = require("./images/router");

router.use("/images", imagesRouter);

/* ************************************************************************* */

module.exports = router;
