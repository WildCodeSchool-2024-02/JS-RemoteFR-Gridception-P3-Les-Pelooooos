const express = require("express");

const router = express.Router();

/* ************************************************************************* */
// Import And Use Routers Here
/* ************************************************************************* */

const terminalsRouter = require("./terminals/router");

router.use("/terminals", terminalsRouter);

const plugsTypesRouter = require("./plugsTypes/router");

router.use("/plugsTypes", plugsTypesRouter);

const brandsRouter = require("./brands/router");

router.use("/brands", brandsRouter);


/* ************************************************************************* */

module.exports = router;
