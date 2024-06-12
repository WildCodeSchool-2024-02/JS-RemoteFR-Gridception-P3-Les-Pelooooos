const express = require("express");

const router = express.Router();

/* ************************************************************************* */
// Import And Use Routers Here
/* ************************************************************************* */

const itemsRouter = require("./items/router");

router.use("/items", itemsRouter);

const carsRouter = require("./cars/router");

router.use("/cars", carsRouter);

/* ************************************************************************* */

module.exports = router;
