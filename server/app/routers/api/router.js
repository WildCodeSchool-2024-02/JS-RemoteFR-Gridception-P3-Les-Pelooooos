const express = require("express");

const router = express.Router();

/* ************************************************************************* */
// Import And Use Routers Here
/* ************************************************************************* */

const itemsRouter = require("./items/router");

router.use("/items", itemsRouter);

const plugsTypesRouter = require("./plugsTypes/router");

router.use("/plugsTypes", plugsTypesRouter);

const brandsRouter = require("./brands/router");

router.use("/brands", brandsRouter);

/* ************************************************************************* */

module.exports = router;
