const express = require("express");

const router = express.Router();

/* ************************************************************************* */
// Import And Use Routers Here
/* ************************************************************************* */

const itemsRouter = require("./items/router");

router.use("/items", itemsRouter);

const plugsRouter = require("./plugs/router");

router.use("/plugs", plugsRouter);
/* ************************************************************************* */

module.exports = router;
