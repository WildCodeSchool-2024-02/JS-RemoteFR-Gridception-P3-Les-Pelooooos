const express = require("express");

const router = express.Router();

/* ************************************************************************* */
// Import And Use Routers Here
/* ************************************************************************* */

const terminalsRouter = require("./terminals/router");

router.use("/terminals", terminalsRouter);
/* ************************************************************************* */

module.exports = router;
